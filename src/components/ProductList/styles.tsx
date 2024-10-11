import styled from 'styled-components';
import { Cores } from '../../styles';

export const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 32px;
    margin: 20px auto; 
    max-width: 1024px;
    width: 100%;
    justify-content: center;
    padding: 20px;
    margin-bottom: 100px;
`;

export const Card = styled.div`
    width: 320px;
    height: 338px;
    background-color: ${Cores.salmao}; 
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    padding: 8px;
`;

export const CardImage = styled.img`
    width: 304px;
    height: 167px;
    object-fit: cover;
`;

export const CardTitle = styled.h3`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 900;
    line-height: 18.75px;
    text-align: left;
    color: ${Cores.bege2}; 
`;

export const CardDescription = styled.p`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px; 
    text-align: left;
    color: ${Cores.bege2}; 
    max-height: 60px;
    overflow-y: auto; 
    margin: 0; 
    padding-right: 8px;
    
    ::-webkit-scrollbar {
        width: 3px;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: ${Cores.bege2};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &:hover {
        ::-webkit-scrollbar {
            width: 6px; 
        }
    }

    scrollbar-width: thin;
    scrollbar-color: ${Cores.bege2} transparent;

    &:hover {
        scrollbar-width: auto;
    }
`;

export const CardButton = styled.button`
    width: 304px;
    height: 24px;
    font-size: 14px;
    font-weight: 700;
    background-color: ${Cores.bege2}; 
    color: ${Cores.salmao}; 
    border: none;  
    cursor: pointer; 
    align-self: flex-end;
`;