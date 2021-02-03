import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

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

const CurrencySelect = ( { currency, handleChange } ) => {
    return (
        <>
            <StyledLabel>Moneda</StyledLabel>
            <StyledSelect
                name="currency"
                value={ currency }
                onChange={ handleChange }
            >
                <option value="">-Seleccione una opción-</option>
                <option value="USD">Dólar Estadounidense</option>
                <option value="EUR">Euro</option>
                <option value="GBP">Libra Esterlina</option>
                <option value="ARS">Peso Argentino</option>
                <option value="COP">Peso Colombiano</option>
                <option value="MXN">Peso Mexicano</option>
            </StyledSelect>
        </>
    );
};

CurrencySelect.propTypes = {
    currency: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default CurrencySelect;
