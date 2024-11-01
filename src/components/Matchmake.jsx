import React, { useEffect, useRef, useState, useCallback } from 'react';

import Home from './Home';
import Battle from './Battle';
import MagicLoad from './other/MagicLoad';
import useMatchmake from '../useMatchmake';
import { useAppContext } from '../AppContext';

//仮

export default function Matchmake({ changeComponent, matchType }) {
    const { origin } = useAppContext();

    const [isLoadingId, setIsLoadingId] = useState(true);
    const [dotCount, setDotCount] = useState(0);
    const matchmake = useRef(useMatchmake().matchmake);
    const endMatchmake = useRef(null);

    const loadDivStyle = {
        display: 'flex',
        position: 'absolute',
        alignItems: 'flex-end',
        bottom: '5%',
        right: '5%',
        flexDirection: 'column',
    };
    const loadStyle = {
        position: 'relative',
        width: '6vw',
        marginRight: '1vw',
        right: '0',
        bottom: '0',
    };

    const textStyle = {
        display: 'block',
        bottom: '0%',
        textAlign: 'center',
    };
    const text =
        (isLoadingId ? 'Loading' : 'Matchmaking') + '.'.repeat(dotCount);

    //dot count
    useEffect(() => {
        const intervalID = setInterval(() => {
            setDotCount((d) => (d + 1) % 4);
        }, 500);

        return () => clearInterval(intervalID);
    }, []);

    // matchmaking
    const searchMatch = useCallback(() => {
        //callbacks
        const handleMatching = (selfID, targetID) => {
            if (targetID) {
                console.log(`matched: ${selfID} ${targetID}`);
                changeComponent(Battle, { selfID, targetID });
            }
        };

        const handleMatchingError = (msg, retry) => {
            if(retry === true){
                console.log('retrying...');
                setTimeout(() => {
                    searchMatch();
                }, 5000);
            }else{
                console.log("Failed to match: " + msg);
                changeComponent(Home);
            }
        };

        fetch((origin || '') + '/api/genID').then((e) => {
            e.text().then((e) => {
                const id = e;
                setIsLoadingId(false);
                const matchData = { matchType, rate: 0, roomWord: '' };
                endMatchmake.current = matchmake.current(id, matchData, {
                    callback: handleMatching,
                    onError: handleMatchingError,
                });
            });
        });
    }, [origin, matchType, changeComponent]);

    useEffect(() => {
        searchMatch();
        const endmatchCallback = endMatchmake.current;

        return () => {
            if (typeof endmatchCallback === 'function') {
                endmatchCallback();
            }
        };
    }, [searchMatch]);

    return (
        <div>
            <div style={loadDivStyle}>
                <MagicLoad style={loadStyle} />
                <p style={textStyle}>{text}</p>
            </div>
        </div>
    );
}
