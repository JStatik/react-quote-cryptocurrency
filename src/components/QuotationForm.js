import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import validator from 'validator';
import useForm from '../hooks/useForm';
import isValidQuotationForm from '../helpers/isValidQuotationForm';
import Error from './Error';
import CurrencySelect from './QuotationForm/CurrencySelect';
import CryptocurrencySelect from './QuotationForm/CryptocurrencySelect';

const StyledSubmitButton = styled.button`
    background: #66a2fe;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
    outline: none;
    padding: 10px;
    transition: background .3s ease;
    width: 100%;

    &:hover {
        background: #326AC0;
        cursor: pointer;
    }

    &:disabled {
        background: #66a2fe;
        cursor: not-allowed;
        opacity: 0.4;
    }
`;

const QuotationForm = ( { setCurrencies } ) => {
    const [ formValues, handleChange, reset ] = useForm( { currency: '', cryptocurrency: '' } );
    const { currency, cryptocurrency } = formValues;

    const [ msgError, setMsgError ] = useState( null );
    const [ disabled, setDisabled ] = useState( false );

    const handleSubmit = ( event ) => {
        event.preventDefault();

        setDisabled( true );

        const escapedCurrency = validator.escape( currency );
        const escapedCryptocurrency = validator.escape( cryptocurrency );

        const { msgErrorQuotation, isValid } = isValidQuotationForm( escapedCurrency, escapedCryptocurrency );
        setMsgError( msgErrorQuotation );

        if( isValid ) {
            setCurrencies( {
                currency: escapedCurrency,
                cryptocurrency: escapedCryptocurrency
            } );

            reset();
        }

        setDisabled( false );
    };

    return (
        <form autoComplete="off" onSubmit={ handleSubmit }>
            { msgError && <Error error={ msgError } height="auto" /> }

            <div>
                <CurrencySelect
                    currency={ currency }
                    handleChange={ handleChange }
                />
            </div>

            <div>
                <CryptocurrencySelect
                    cryptocurrency={ cryptocurrency }
                    handleChange={ handleChange }
                />
            </div>

            <StyledSubmitButton
                type="submit"
                disabled={ disabled }
            >
                Cotizar
            </StyledSubmitButton>
        </form>
    );
};

QuotationForm.propTypes = {
    setCurrencies: PropTypes.func.isRequired
};

export default QuotationForm;
