import styled from "styled-components";
import { Cores } from '../../styles';
import fundo from '../../assets/images/fundo.png'

export const HeaderImage = styled.div`
    width: 100%;
    height: 186px;
    background-image: url(${fundo});
    background-size: cover;
    position: relative;
`;

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1368px;
    margin: 0 auto;
    position: relative;
    padding: 0 20px;
    height: 73%;
`;

export const LogoContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

export const Logo = styled.img`
    margin: 0;
`;

export const HomeLink = styled.span`
    font-family: Roboto;
    font-size: 18px;
    font-weight: 900;
    text-align: left;
    color: ${Cores.salmao};
    position: absolute;
    top: 59px;
    left: 171px;
    width: 109px;
    height: 21px;
    cursor: pointer;
    opacity: 0.8;
`;

export const CartText = styled.span`
    font-family: Roboto;
    font-size: 18px;
    font-weight: 900;
    text-align: right;
    color: ${Cores.salmao};
    position: absolute;
    top: 59px;
    right: 168px;
    width: 256px;
    height: 21px;
    opacity: 0.8;
    cursor: pointer;
`;
