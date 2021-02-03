import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const useAxios = ( currency, cryptocurrency ) => {
    const isMountedRef = useRef( true );
    const [ state, setState ] = useState( { data: {}, loading: true, error: null } );

    useEffect( () => {
        return () => {
            isMountedRef.current = false;
        }
    }, [] )

    useEffect( () => {
        if( currency !== '' && cryptocurrency !== '' ) {
            setState( { data: {}, loading: true, error: null } );

            const getQuotation = async() => {
                try{
                    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${ cryptocurrency }&tsyms=${ currency }`;
                    const response = await axios.get( url );

                    const quotation = response.data.DISPLAY[ cryptocurrency ][ currency ];

                    isMountedRef.current && setState( { data: quotation, loading: false, error: null } );  
                } catch( e ) {
                    setState( { data: {}, loading: false, error: 'Error en la peticion' } );
                }                
            };

            getQuotation();
        }
    }, [ currency, cryptocurrency ] );

    return state;
};

export default useAxios;
