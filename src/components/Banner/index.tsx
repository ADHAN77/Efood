import React from 'react';
import { BannerContainer, Categoria, ContentContainer, RestauranteNome } from './styles';

interface BannerProps {
    categoria: string;
    nomeRestaurante: string;
    fotoRestaurante: string; // Nova propriedade para a foto do restaurante
}

const Banner: React.FC<BannerProps> = ({ categoria, nomeRestaurante, fotoRestaurante }) => {
    return (
        <BannerContainer style={{ backgroundImage: `url(${fotoRestaurante})` }}>
            <ContentContainer>
                <Categoria>{categoria}</Categoria>
                <RestauranteNome>{nomeRestaurante}</RestauranteNome>
            </ContentContainer>
        </BannerContainer>
    );
};

export default Banner;
