import { useState, useEffect, useRef } from "react";
import { useAppContext } from "./AppContext";

const useCommunication = (target) => {
    const [onChars, setOnChars] = useState(() => {});
    const [onSpell, setOnSpell] = useState(() => {});
    const [onGameState, setOnGameState] = useState(() => {});
    const [onError, setOnError] = useState(() => {});

    const wsRef = useRef(null);
    const peerRef = useRef(null);

    const {id, idLoading, idError} = useAppContext();

    const targetWSURL = idLoading === false && idError === false ? 
        process.env.REACT_APP_DEBUG === "true" ? "ws://localhost:9000/ws" : "/ws"
    : ""

    if(targetWSURL === "") return;

    //現在のpeerjsが無効のためwsのみで通信
    wsRef.current = new WebSocket(targetWSURL)

    return {};
}

export default useCommunication;