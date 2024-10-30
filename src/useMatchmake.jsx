import { useRef } from 'react';
import { useAppContext } from './AppContext';

const useMatchmake = () => {
    const { id, origin } = useAppContext();
    const socketRef = useRef(null);

    const matchmake = (
        { matchType, rate, roomWord },
        { callback = () => {}, onError = () => {} } = {}
    ) => {
        if (typeof callback !== 'function')
            throw new Error('callback is not a function');
        if (typeof onError !== 'function')
            throw new Error('onError is not a function');
        socketRef.current = new WebSocket((origin || "") + '/matchmake');

        socketRef.current.onopen = () => {
            const payload = JSON.stringify({id, matchType, rate, roomWord});
            socketRef.current.send(payload);

            socketRef.current.onmessage = (message) => {
                try{
                    const data = JSON.parse(message.data);
                    if(data.type === "success"){
                        if(data?.id){
                            callback(data.id);
                            socketRef.current.close();
                        }
                    }
                }catch(e){
                    onError(e);
                    socketRef.current.close();
                }
            }
        };
    };

    return { matchmake };
};

export default useMatchmake;
