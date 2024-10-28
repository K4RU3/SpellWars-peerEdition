// AppContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  // ここでエクスポート
  const [id, setID] = useState(null);
  const [idLoading, setIdLoading] = useState(false);
  const [idError, setIdError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIdLoading(true);
        const response = await fetch("/api/genID");
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
  }, []);

  return (
    <AppContext.Provider value={{ id, idLoading, idError }}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
