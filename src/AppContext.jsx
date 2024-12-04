// AppContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
    // ここでエクスポート
    const [isDebug, setIsDebug] = useState(null);
    const [origin, setOrigin] = useState("");
    const [id, setID] = useState(null);

    //初回読み込み
    useEffect(() => {
        let _origin = "";
        if (process.env.REACT_APP_DEBUG === "true") {
            setIsDebug(true);
            setOrigin("http://localhost:9000");
            _origin = "http://localhost:9000";
        } else {
            setIsDebug(false);
        }
        
        fetch(_origin + "/api/genID").then(e=>e.text()).then(_id=>setID(_id)).catch(_=>setID(null));
    }, []);

    return (
        <AppContext.Provider value={{ isDebug, origin, id }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
