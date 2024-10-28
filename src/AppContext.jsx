// AppContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
    // ここでエクスポート
    const [id, setID] = useState(null);
    const [idLoading, setIdLoading] = useState(false);
    const [idError, setIdError] = useState(false);
    const [isDebug, setIsDebug] = useState(null);

    useEffect(() => {
        if (process.env.REACT_APP_DEBUG === "true") {
            setIsDebug(true);
        } else {
            setIsDebug(false);
        }
    }, []);

    useEffect(() => {
        if (isDebug === null) return;
        (async () => {
            try {
                const url =
                    (isDebug ? "http://localhost:9000" : "") + "/api/genID";
                console.log(url);
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
    }, [isDebug]);

    return (
        <AppContext.Provider value={{ id, idLoading, idError, isDebug }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
