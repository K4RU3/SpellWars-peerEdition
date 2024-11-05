import { useState, useCallback } from 'react';
import { useAppContext } from './AppContext.jsx';

const useMatchmake = () => {
    const { origin } = useAppContext();

    const [matching, setMatching] = useState(false);
    const [error, setError] = useState(null);

    const handleMatchmaking = useCallback(({matchType, rate, roomWord}, callback) => {
        const controller = new AbortController();
        const signal = controller.signal;
        const endMatching = () => {
            controller.abort();
            setMatching(false);
            setError(null);
        }
        setMatching(true);
        setError(null);
        fetch(`${origin}/api/genID`, { signal }).then(e => {
            if(e.ok){
                e.text().then(selfID => {
                    fetch(`${origin}/matchmake/${matchType}`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({selfID, rate, roomWord}),
                        signal
                    }).then(e => {
                        if(e.ok){
                            e.text().then(targetID => {
                                setError(null);
                                setMatching(false);
                                callback({selfID, targetID});
                            })
                        }else{
                            setError(e.statusText);
                            setMatching(false);
                            callback(undefined);
                        }
                    }).catch(e => {
                        setError(e.message);
                        setMatching(false);
                        callback(undefined);
                    })
                })
            }else{
                setError(e.statusText);
                setMatching(false);
                callback(undefined);
            }
        }).catch(e => {
            setError(e.message);
            setMatching(false);
            callback(undefined);
        })
        return endMatching;
    }, [origin]);

    return { matching, error, handleMatchmaking };
};

export default useMatchmake;
