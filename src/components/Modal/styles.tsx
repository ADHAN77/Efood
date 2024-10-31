import styled from 'styled-components';
import { Cores } from '../../styles';

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`;

export const ModalContent = styled.div`
    width: 1024px;
    height: 344px;
    background-color: ${Cores.salmao}; 
    display: flex;
    padding: 32px;
    position: relative; 
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); 
`;

export const ModalImage = styled.img`
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;
`;

export const ModalTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${Cores.branco};
`;

export const ModalTitle = styled.h2`
    font-family: Roboto;
    font-size: 18px;
    font-weight: 900;
    line-height: 21.09px;
    margin-bottom: 16px;
    color: ${Cores.branco}; 
`;

export const ModalDescription = styled.p`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    margin-bottom: 16px;
    width: 656px;
    color: ${Cores.branco}; 
`;

export const ModalPorcao = styled.p`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    width: 656px;
    color: ${Cores.branco};
`;

export const ModalButton = styled.button`
    width: 218px;
    height: 24px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    background-color: ${Cores.bege2}; 
    color: ${Cores.salmao}; 
    border: none;
    padding: 4px;
    cursor: pointer;
    text-align: center;
    margin-top: 16px;
    margin-bottom: 63px;
`;
export const CloseButton = styled.button`
    position: absolute;
    top: 8px;
    right: 8px;
    background: none;
    border: none;
    cursor: pointer;

    img {
        width: 16px;
        height: 16px;
    }
`;

