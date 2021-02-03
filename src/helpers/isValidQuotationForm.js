import validator from 'validator';

const isValidQuotationForm = ( currency, cryptocurrency ) => {
    if( currency.trim().length < 3 || validator.isEmpty( currency ) || !validator.isAlpha( currency, [ 'es-ES' ] ) || !validator.isUppercase( currency ) ) {
        return {
            msgErrorQuotation: 'Ingrese una moneda válida.',
            isValid: false
        };
    } else if( cryptocurrency.trim().length < 3 || validator.isEmpty( cryptocurrency ) || !validator.isAlpha( cryptocurrency, [ 'es-ES' ] ) || !validator.isUppercase( cryptocurrency ) ) {
        return {
            msgErrorQuotation: 'Ingrese una cryptomoneda válida.',
            isValid: false
        };
    }

    return {
        msgErrorQuotation: null,
        isValid: true
    };
};

export default isValidQuotationForm;
