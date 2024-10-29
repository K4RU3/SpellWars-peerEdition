import React, { useEffect, useState } from 'react';

import Home from './Home';
import { useAppContext } from '../AppContext';
import MagicLoad from './other/MagicLoad';
import useMatchmake from '../useMatchmake';

//仮

export default function Matchmake({ changeComponent, matchType }) {
    const { id, idLoading, idError } = useAppContext();

    const [dotCount, setDotCount] = useState(0);


    const loadDivStyle = {
        display: 'flex',
        position: 'absolute',
        alignItems: "flex-end",
        bottom: '5%',
        right: '5%',
        flexDirection: 'column',
    };
    const loadStyle = {
        position: "relative",
        width: '6vw',
        marginRight: '1vw',
        right: "0",
        bottom: "0",
    };

    const textStyle = {
        display: 'block',
        bottom: '0%',
        textAlign: "center",
    };
    const text = (idLoading ? 'Loading' : 'Matchmaking') + '.'.repeat(dotCount);

    //dot count
    useEffect(()=>{
        const intervalID = setInterval(() => {
            setDotCount((d) => (d + 1) % 4);
        }, 500);

        return () => clearInterval(intervalID);
    }, [])

    //get id
    useEffect(() => {
        if (idError === true) {
            alert('IDの取得に失敗しました。ホームに戻ります。');
            changeComponent(Home);
        }
    }, [idError, changeComponent]);


    return (
        <div>
            <p onClick={()=>changeComponent(Home)}>{id} at {matchType}</p>
            <div style={loadDivStyle}>
                <MagicLoad style={loadStyle} />
                <p style={textStyle}>{text}</p>
            </div>
        </div>
    );
}
