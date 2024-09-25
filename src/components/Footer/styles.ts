import styled from 'styled-components';
import { Cores } from '../../styles';

export const FooterContainer = styled.footer`
    background-color: ${Cores.bege2};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 48px;
`;

export const Logo = styled.img`
    margin-bottom: 32px;
`;

export const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 70px;
`;

export const Icon = styled.img`
    width: 24px;
    height: 24px;
`;

export const FooterText = styled.p`
    font-size: 10px;
    font-weight: 400;
    line-height: 11.72px;
    text-align: center;
    width: 480px;
    height: 24px;
    top: 2084px;
    left: 444px;
    gap: 0px;
    opacity: 0px;

`;
