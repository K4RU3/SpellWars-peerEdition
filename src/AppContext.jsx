// AppContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
    // ここでエクスポート
    const [id, setID] = useState(null);
    const [idLoading, setIdLoading] = useState(false);
    const [idError, setIdError] = useState(false);
    const [isDebug, setIsDebug] = useState(null);
    const [origin, setOrigin] = useState("");

    const [matchmakeWS, setMatchmakeWS] = useState(null);

    //初回読み込み
    useEffect(() => {
        if (process.env.REACT_APP_DEBUG === "true") {
            setIsDebug(true);
            setOrigin("http://localhost:9000");
        } else {
            setIsDebug(false);
        }
    }, []);

    //id取得
    useEffect(() => {
        if (isDebug === null) return;
        (async () => {
            try {
                const url =
                    origin + "/api/genID";
                const response = await fetch(url);
                if (response.ok) {
                    const text = await response.text();
                    setID(text);
                    setIdLoading(false);
                } else {
                    setIdError(true);
                    setIdLoading(false);
                }
            } catch {
                setIdError(true);
                setIdLoading(false);
            }
        })();
    }, [isDebug, origin]);

    //matchmake system
    useEffect(() => {
        //matchmake system
        const ws = new WebSocket(origin + "/matchmake");
        setMatchmakeWS(ws);
        ws.onmessage = (msg) => {
            try{
                const data = JSON.parse(msg.data);
                if(data?.type === "success"){
                    //成功
                    if(data?.id !== undefined){
                        //マッチングが成功したことを通知+idを送信
                    }
                }else{
                    //エラー
                }
            }catch(e){
                console.warn("Invalid matchmake message: ", msg.data);
            }
        }

        return () => {
            ws.close();
        }
    }, [origin]);
    const matchmake = (type, selfID, targetID, successCallback) => {
        if(type && selfID && targetID){
            if(typeof type === "string" && typeof selfID === "string" && typeof targetID === "string"){
                if(type === "quick"){
                    matchmakeWS.send(JSON.stringify({
                        type: "quick",
                        targetID: targetID,
                        selfID: selfID
                    }));
                }
            }
        }
    }

    return (
        <AppContext.Provider value={{ id, idLoading, idError, isDebug, matchmake }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
