import { useEffect, useState } from 'react';
import { useAppContext } from './AppContext';

const useMatchmake = ({ callback = () => {}, onError = () => {} } = {}) => {
    const { id, idLoading, idError, origin } = useAppContext();
    const [ws, setWS] = useState(null)
    const [] = useState()

    useEffect(() => {
        if(id && !idLoading && !idError){

        }
    }, [callbacks])
};

export default useMatchmake;
