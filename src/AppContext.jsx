// AppContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
    // ここでエクスポート
    const [isDebug, setIsDebug] = useState(null);
    const [origin, setOrigin] = useState("");

    //初回読み込み
    useEffect(() => {
        if (process.env.REACT_APP_DEBUG === "true") {
            setIsDebug(true);
            setOrigin("http://localhost:9000");
        } else {
            setIsDebug(false);
        }
    }, []);

    return (
        <AppContext.Provider value={{ isDebug, origin }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
