import React, { useState } from 'react';
import styled from '@emotion/styled';
import useAxios from './hooks/useAxios';
import showLoadingOrData from './helpers/showLoadingOrData';
import QuotationForm from './components/QuotationForm';

const StyledContainer = styled.div`
    margin: 0 auto;
    max-width: 1000px;

    @media( min-width: 992px ) {
        column-gap: 2rem;
        display: grid;
        grid-template-columns: repeat( 2, 1fr );
    }
`;

const StyledImage = styled.img`
    margin-top: 5rem;
    max-width: 100%;
`;

const StyledTitle = styled.h1`
    color: #fff;
    font-family: 'Bebas Neue', cursive;
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 50px;
    margin-top: 80px;
    text-align: left;

    &::after {
        background: #66A2FE;
        content: '';
        display: block;
        height: 6px;
        width: 100px;
    }
`;

const QuoteCryptocurrency = () => {
    const [ currencies, setCurrencies ] = useState( { currency: '', cryptocurrency: '' } );
    const { currency, cryptocurrency } = currencies;

    const { data: quotation, loading, error } = useAxios( currency, cryptocurrency );

    return (
        <StyledContainer>
            <div>
                <StyledImage
                    src="./assets/img/cryptomonedas.png"
                    alt="Cryptomonedas"
                />
            </div>

            <div>
                <StyledTitle>Cotizador de Cryptomonedas</StyledTitle>

                <QuotationForm setCurrencies={ setCurrencies } />

                {
                    ( currency !== '' && cryptocurrency !== '' ) && showLoadingOrData( quotation, loading, error )
                }
            </div>
        </StyledContainer>
    );
};

export default QuoteCryptocurrency;
