import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import axios from 'axios';

const StyledLabel = styled.label`
    color: #fff;
    display: block;
    font-family: 'Bebas Neue', cursive;
    font-size: 2.4rem;
    font-weight: bold;
    margin-top: 2rem;
    text-transform: uppercase;
`;

const StyledSelect = styled.select`
    --webkit-appearance: none;
    border: none;
    border-radius: 10px;
    font-size: 1.2rem;
    display: block;
    outline: none;
    padding: 1rem;
    width: 100%;
`;

const CryptocurrencySelect = ( { cryptocurrency, handleChange } ) => {
    const [ cryptocurrencies, setCryptocurrencies ] = useState( [] );

    useEffect( () => {
        const getCryptocurrencies = async() => {
            const response = await axios.get( 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD' );
            const { Data } = response.data;

            setCryptocurrencies( Data );
        };

        getCryptocurrencies();
    }, [] );

    return (
        <>
            <StyledLabel>Cryptomoneda</StyledLabel>
            <StyledSelect
                name="cryptocurrency"
                value={ cryptocurrency }
                onChange={ handleChange }
            >
                <option value="">-Seleccione una opción-</option>
                
                {
                    cryptocurrencies.map( cryptocurrencyAPI => {
                        const { Id, FullName, Name } = cryptocurrencyAPI.CoinInfo;

                        return <option key={ Id } value={ Name }>{ FullName }</option>
                    } )
                }
            </StyledSelect>
        </>
    );
};

CryptocurrencySelect.propTypes = {
    cryptocurrency: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default CryptocurrencySelect;
