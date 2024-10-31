import styled from 'styled-components';
import { Cores } from '../../styles';

export const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 360px;
    height: 100%;
    background-color: ${Cores.salmao};
    z-index: 1000;
    box-shadow: -4px 0 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
`;

export const SidebarContent = styled.div`
    padding: 32px 8px 16px;
    color: white;
    overflow-y: auto;
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;

export const ProductCard = styled.div`
    width: 344px;
    height: 100px;
    background-color: ${Cores.bege2};
    display: flex;
    align-items: center;
    padding: 10px;
    margin-bottom: 16px;
    position: relative;
`;

export const ProductImage = styled.img`
    width: 80px;
    height: 80px;
    margin-right: 8px;
`;

export const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    color: ${Cores.salmao};
    align-items: flex-start;
`;

export const ProductTitle = styled.h3`
    font-family: Roboto;
    font-size: 18px;
    font-weight: 900;
    line-height: 21.09px;
    text-align: center;
`;

export const ProductPrice = styled.p`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    margin: 16px 0 20px 0;
`;

export const IconContainer = styled.div`
    position: absolute;
    bottom: 8px;
    right: 8px;
`;

export const BinIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

export const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    color: ${Cores.bege2};
`;

export const ContinueButton = styled.button`
    width: 344px;
    height: 24px;
    background-color: ${Cores.bege2};
    color: ${Cores.salmao};
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    text-align: center;
    border: none;
    cursor: pointer;
    margin-top: 16px;
`;

export const EmptyCartMessage = styled.span`
    color: ${Cores.bege2};
    font-family: Roboto;
    font-size: 20px;
    font-weight: 700;
    line-height: 16.41px;
    text-align: center;
    margin-top: 16px;
    margin-left: 16px;
`
