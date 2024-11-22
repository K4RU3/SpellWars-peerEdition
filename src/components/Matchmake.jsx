import React, { useEffect, useState } from 'react';

import Home from './Home';
import Battle from './Battle';
import MagicLoad from './other/MagicLoad';
import useMatchmake from '../useMatchmake';

//仮

export default function Matchmake({ changeComponent, matchType, rate, roomWord }) {
    const [dotCount, setDotCount] = useState(0);
    useMatchmake(matchType, (self, target) => {
        if(target !== undefined){
            changeComponent(Battle, { selfID: self, targetID: target});
        }
    }, { rate, roomWord });

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
    const text = 'Matchmaking' + '.'.repeat(dotCount);

    //dot count
    useEffect(() => {
        const intervalID = setInterval(() => {
            setDotCount((d) => (d + 1) % 4);
        }, 500);

        return () => clearInterval(intervalID);
    }, []);

    return (
        <div>
            <div style={loadDivStyle}>
                <MagicLoad style={loadStyle} />
                <p style={textStyle}>{text}</p>
            </div>
        </div>
    );
}
