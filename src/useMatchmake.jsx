import { useRef, useEffect } from 'react';
import { useAppContext } from './AppContext';

const useMatchmake = (type, callback, option) => {
    const { origin } = useAppContext();
    const controller = useRef(null);
    const matching = useRef(false);
    const cb = useRef(callback);
    const { rate, roomWord } = option;

    useEffect(() => {
        const cont = new AbortController()
        if(matching.current){
            controller?.abort()
        }

        controller.current = cont;
        matching.current = true;

        const matchmakeRequest = async () => {
            try {
                const id = await(await fetch(origin + "/api/genID")).text()

                const response = await fetch(`${origin}/matchmake/${type}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        selfID: id,
                        rate,
                        roomWord,
                    }),
                    signal: cont.signal,
                });

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const text = await response.text();
                cb.current(id, text); // コールバックを実行
            } catch (error) {
                cb.current(undefined); // エラー発生時にコールバックを実行
            } finally {
                matching.current = false; // マッチング処理が完了
            }
        };

        matchmakeRequest();

        return () => {
            // コンポーネントがアンマウントされるときにリクエストをキャンセル
            cont.abort();
            matching.current = false;
        };
    }, [type, rate, roomWord, origin]);
};

export default useMatchmake;
