import React from 'react';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
    align-items: center;
    display: flex;
    height: 250px;
    justify-content: center;
`;

const StyledSpinner = styled.div`
    height: 40px;
    margin: 100px auto;
    position: relative;
    width: 40px;

    .cube1, .cube2 {
        -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;
        animation: sk-cubemove 1.8s infinite ease-in-out;
        background-color: #fff;
        height: 15px;
        left: 0;     
        position: absolute;
        top: 0;      
        width: 15px;
    }

    .cube2 {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
    }

    @-webkit-keyframes sk-cubemove {
        25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }
        50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }
        75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }
        100% { -webkit-transform: rotate(-360deg) }
    }

    @keyframes sk-cubemove {
        25% { 
            transform: translateX(42px) rotate(-90deg) scale(0.5);
            -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
        } 50% { 
            transform: translateX(42px) translateY(42px) rotate(-179deg);
            -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
        } 50.1% { 
            transform: translateX(42px) translateY(42px) rotate(-180deg);
            -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
        } 75% { 
            transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
            -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
        } 100% { 
            transform: rotate(-360deg);
            -webkit-transform: rotate(-360deg);
        }
    }
`;

const Loading = React.memo( () => {
    return (
        <StyledContainer>
            <StyledSpinner className="spinner">
                <div className="cube1"></div>
                <div className="cube2"></div>
            </StyledSpinner>
        </StyledContainer>
    );
} );

export default Loading;
