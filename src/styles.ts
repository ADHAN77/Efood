import styled, { createGlobalStyle } from "styled-components";

export const Cores = {
    bege: '#FFF8F2',
    salmao: '#E66767',
    bege2: '#FFEBD9',
    branco: '#FFFFFF'
}

export const GlogalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    body {
        background-color: ${Cores.bege};
        color: ${Cores.salmao};
    }
`
export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    justify-content: center;
    padding: 20px;
`