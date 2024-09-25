import styled from "styled-components";
import { Cores } from '../../styles'

export const HeaderImage = styled.div`
    width: 100%;
    height: 384px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 55px;
`

export const Logo = styled.img`
    margin-top: 40px;
`

export const Titulo = styled.h1`
    color: ${Cores.salmao};
    width: 540px;
    height: 84px;
    font-weight: 900;
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    margin-top: 150px;
    margin-bottom: 40px;
`