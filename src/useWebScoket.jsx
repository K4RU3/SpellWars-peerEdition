import { useEffect, useState, useRef } from "react";

const useWebSocket = (url) => {
    const [onmessage, _setOnMessage] = useState(() => {});
    const [onerror, _setOnError] = useState(() => {});
    const socketRef = useRef(null);

    useEffect(() => {
        if (socketRef.current) socketRef.current.close();
        socketRef.current = new WebSocket(url);
        socketRef.current.onmessage = (e) => onmessage(e);
        socketRef.current.onerror = (e) => {
            onerror(e);
            socketRef.current.close();
            return;
        };
    }, [url, onmessage, onerror]);

    const send = (data) => {
        if (
            socketRef.current &&
            socketRef.current.readyState === WebSocket.OPEN
        ) {
            socketRef.current.send(data);
        }
    };

    const setOnMessage = (func) => {
        if (typeof func === "function") {
            _setOnMessage(func);
            return true;
        } else {
            return false;
        }
    };

    const setOnError = (func) => {
        if (typeof func === "function") {
            _setOnError(func);
            return true;
        } else {
            return false;
        }
    };

    return { send, setOnMessage, setOnError };
};

export default useWebSocket;
