import { useEffect, useRef, useCallback } from 'react';

const useWebSocket = (url, onMessageCallback, onErrorCallback) => {
    const socketRef = useRef(null);

    const onMessage = useCallback(onMessageCallback, [onMessageCallback]);
    const onError = useCallback(onErrorCallback, [onErrorCallback]);

    useEffect(() => {
        if (socketRef.current) socketRef.current.close();
        socketRef.current = new WebSocket(url);
        if(typeof onMessage === "function") socketRef.current.onmessage = onMessage;
        if(typeof onError === "function") socketRef.current.onerror = onError;

        return () => {
            if (socketRef.current) socketRef.current.close();
            socketRef.current = null;
        }
    }, [url, onMessage, onError]);

    const send = (data) => {
        if (
            socketRef.current &&
            socketRef.current.readyState === WebSocket.OPEN
        ) {
            socketRef.current.send(data);
        }
    };

    return { send };
};

export default useWebSocket;
