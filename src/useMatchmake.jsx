import { useRef, useEffect } from 'react';
import { useAppContext } from './AppContext';

const useMatchmake = (type, callback, option) => {
    const { origin, id } = useAppContext();
    const ws = useRef(new WebSocket(origin + "/matchmake"));

    useEffect(() => {
        const client = ws.current;
        if(client.readyState === 1){
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
                        callback(data);
                    }
                }catch(e){console.warn(e)}
            }
        }

        return () => {
            if(client.readyState === 1){
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
