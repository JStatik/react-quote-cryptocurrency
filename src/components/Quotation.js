import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
    color: #fff;
`;

const StylePriceParagraph = styled.p`
    font-size: 30px;
`;

const StyledInfoParagraph = styled.p`
    font-size: 18px;

    span {
        text-decoration: underline;
        font-weight: 500;
    }
`;

const Quotation = React.memo( ( { quotation } ) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = quotation;

    return (
        <StyledContainer>
            <StylePriceParagraph>El precio actual es: <span>{ PRICE }</span></StylePriceParagraph>
            <StyledInfoParagraph>El precio más alto del día es: <span>{ HIGHDAY }</span></StyledInfoParagraph>
            <StyledInfoParagraph>El precio más bajo del día es: <span>{ LOWDAY }</span></StyledInfoParagraph>
            <StyledInfoParagraph>Variación en las últimas 24 hs: <span>{ CHANGEPCT24HOUR } %</span></StyledInfoParagraph>
            <StyledInfoParagraph>Última actualización: <span>{ LASTUPDATE }</span></StyledInfoParagraph>
        </StyledContainer>
    );
} );

Quotation.propTypes = {
    quotation: PropTypes.object.isRequired
};

export default Quotation;
