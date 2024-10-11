import styled from 'styled-components';
import { Cores } from '../../styles';

export const BannerContainer = styled.div`
    position: relative; /* Necessário para a overlay */
    width: 100%;
    height: 376.75px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 30px;

    /* Overlay escura */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* Preta com 50% de opacidade */
        z-index: 1; /* Mantém a overlay atrás dos textos */
    }
`;

export const ContentContainer = styled.div`
    position: relative; /* Para garantir que os textos fiquem acima da overlay */
    width: 100%;
    max-width: 1368px;
    padding: 0 170px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 30px;
    padding-bottom: 30px;
    z-index: 2; /* Textos acima da overlay */
`;

export const Categoria = styled.span`
    font-family: Roboto;
    font-size: 32px;
    font-weight: 100;
    line-height: 37.5px;
    color: ${Cores.branco};
    margin-bottom: 10px;
`;

export const RestauranteNome = styled.h1`
    font-family: Roboto;
    font-size: 32px;
    font-weight: 900;
    line-height: 37.5px;
    color: ${Cores.branco};
    margin-top: 230px;
    margin-bottom: 30px;
`;
