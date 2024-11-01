import { useRef } from 'react';
import { useAppContext } from './AppContext.jsx';

const useMatchmake = () => {
    const { origin } = useAppContext();
    const socketRef = useRef(null);

    const matchmake = (
        id,
        { matchType, rate, roomWord },
        { callback = () => {}, onError = () => {} } = {}
    ) => {
        if (socketRef.current) socketRef.current.close();
        if (typeof callback !== 'function')
            throw new Error('callback is not a function');
        if (typeof onError !== 'function')
            throw new Error('onError is not a function');
        socketRef.current = new WebSocket((origin || '') + '/matchmake');

        socketRef.current.onopen = () => {
            const payload = JSON.stringify({ id, matchType, rate, roomWord });
            socketRef.current.send(payload);

            socketRef.current.onmessage = (message) => {
                try {
                    const data = JSON.parse(message.data);
                    if (data.type === 'success') {
                        if (data.id) {
                            callback(id, data.id);
                            socketRef.current.close();
                        }
                    }else if(data?.retry === true){
                        onError(data.message, true);
                        socketRef.current.close();
                    }else{
                        onError(data.message, false);
                        socketRef.current.close();
                    }
                } catch (e) {
                    onError(e);
                    socketRef.current.close();
                }
            };
        };

        const endMatchmake = () => {
            socketRef.current.close();
        };

        return endMatchmake;
    };

    return { matchmake };
};

export default useMatchmake;
