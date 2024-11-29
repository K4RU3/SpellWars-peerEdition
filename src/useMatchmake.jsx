import { useRef, useEffect } from 'react';
import { useAppContext } from './AppContext';

const useMatchmake = (type, callback, option) => {
    const { origin, id } = useAppContext();
    const ws = useRef(new WebSocket(origin + "/matchmake"));

    useEffect(() => {
        if(id === null) {
            callback(null);
        }
        const client = ws.current;
        let isMatched = false;
        const opened = () => {
            const msgID = ''+Date.now()+Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER + 1));

            client.send(JSON.stringify({
                messageID: msgID,
                type,
                id,
                ...option
            }));
            client.onmessage = (msg) => {
                try{
                    const { messageID, data } = JSON.parse(msg.data);
                    if(messageID === msgID){
                        isMatched = true;
                        const targetID = JSON.parse(data).targetID;
                        callback(id, targetID);
                    }else{
                        callback(null)
                    }
                }catch(e){console.warn(e)}
            }
        }

        if(client.readyState === 1){
            opened();
        }else{
            client.onopen = opened;
        }

        return () => {
            if(client.readyState === 1 && isMatched === false){
                client.send(JSON.stringify({
                    messageID: "null",
                    type: 'cancel',
                    id
                }));
            }
        }
    }, [id, type, callback, option]);
};

export default useMatchmake;
