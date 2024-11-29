import React, { useState, useEffect } from 'react'

import MagicLoad from '../other/MagicLoad';

export default function LoadingImg() {
    const [dotCount, setDotCount] = useState(0);

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
    <div style={loadDivStyle}>
            <MagicLoad style={loadStyle} />
            <p style={textStyle}>{text}</p>
    </div>
  )
}
