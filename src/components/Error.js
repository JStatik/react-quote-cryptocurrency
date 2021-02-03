import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`;

const StyledParagraph = styled.p`  
    background-color: #990000;
    border-radius: 10px;
    color: #fff; 
    font-family: 'Bebas Neue', cursive;
    font-size: 22px;
    margin: 0;
    padding: 0.5rem;
    text-align: center;
    text-transform: uppercase;
`;

const Error = React.memo( ( { error, height } ) => {
    return (
        <StyledContainer style={ { height: height } }>
            <StyledParagraph >{ error }</StyledParagraph>
        </StyledContainer>
    );
} );

Error.propTypes = {
    error: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
};

export default Error;
