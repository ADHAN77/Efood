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

    .margin-top {
        margin-top: 24px;
    }
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
    margin-bottom: 16px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    color: ${Cores.bege2};
`;

export const ThankYouText = styled.p`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: ${Cores.bege2};
`

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
    margin-bottom: 8px;
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

export const FormLabel = styled.label`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: ${Cores.bege2};
`

export const FormInput = styled.input`
    width: 344px;  
    height: 32px; 
    padding: 8px;
    border: none; 
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.41px;
    color: #333;
    background-color: ${Cores.bege2};
    margin-bottom: 8px;
    margin-top: 8px;
`

export const TitleCheckout = styled.h3`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 700;
    line-height: 18.75px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: ${Cores.bege2};
    margin-bottom: 16px;
`
export const InlineContainer = styled.div`
    display: flex;
    gap: 34px; /* Espaçamento horizontal entre os campos */

    div {
        display: flex;
        flex-direction: column;
        width: 155px; /* Largura específica para os campos CEP e Número */

        /* Reaproveitando estilizações globais */
        label {
            ${FormLabel};
        }

        input {
            ${FormInput};
            width: 100%; /* Ajusta para ocupar toda a largura do contêiner (155px) */
        }
    }
`;

export const CardDetailsContainer = styled.div`
    display: flex;
    gap: 30px; /* Espaçamento horizontal entre os campos */
    width: 100%; /* Garantir que o container ocupe 100% da largura disponível */

    /* O primeiro campo será o Número do Cartão */
    div:nth-child(1) {
        display: flex;
        flex-direction: column;
        width: 228px; /* Largura específica para o Número do Cartão */
        
        /* Reaproveitando a estilização do label */
        label {
            ${FormLabel};
        }

        input {
            ${FormInput};
            width: 100%; /* Ajusta para o número de cartão ocupar 100% da largura do container */
            height: 32px; /* Garantir a altura de 32px */
        }
    }

    /* O segundo campo será o CVV */
    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        width: 87px; /* Largura específica para o CVV */
        
        /* Reaproveitando a estilização do label */
        label {
            ${FormLabel};
        }

        input {
            ${FormInput};
            width: 100%; /* Ajusta para o CVV ocupar 100% da largura do container */
            height: 32px; /* Garantir a altura de 32px */
        }
    }
`;