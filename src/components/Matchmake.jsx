import React from 'react';

import Home from './Home';
import Battle from './Battle';
import LoadingImg from './Matchmake/LoadingImg';
import useMatchmake from '../useMatchmake';

export default function Matchmake({ changeComponent, matchType, rate, roomWord }) {
    useMatchmake(matchType, (self, target) => {
        if(target !== undefined){
            changeComponent(Battle, { selfID: self, targetID: target});
        }else{
            changeComponent(Home);
        }
    }, { rate, roomWord });

    return (
        <div>
            <LoadingImg />
        </div>
    );
}
