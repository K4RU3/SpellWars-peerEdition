import { useState, useRef, useCallback } from "react";
import { useAppContext } from "./AppContext";
import useWebSocket from "./useWebScoket"

const useCommunication = (target, onMessage, onError) => {
    const { origin, id } = useAppContext();
    const url = origin + "/ws"
    const _onMessage = useCallback(onMessage, [onMessage]);
    const _onError = useCallback(onError, [onError]);

    const [connected, setConnected] = useState(false);

    const socketRef = useRef(useWebSocket(url, _onMessage, _onError));
    socketRef.current.onmessage = function pre_onMessage(msg) {
        if(msg.data === "connected") {
            setConnected(true);
            socketRef.current.removeEventListener("message", pre_onMessage);
            socketRef.current.onmessage = _onMessage;
            socketRef.current.onerror = (e) => {
                _onError(e);
            };
        }
    }

    socketRef.currrent.onopen = () => {
        socketRef.current.send(JSON.stringify({
            targetID: target,
            selfID: id
        }))
    };

    const send = useCallback((data) => {
        if(connected && socketRef.current.readyState === WebSocket.OPEN) {
            socketRef.current.send(data);
        }else{
            console.warn("Not connected");
        }
    }, [connected])

    return { send };
}

export default useCommunication;