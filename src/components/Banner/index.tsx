import React from 'react';
import { BannerContainer, Categoria, ContentContainer, RestauranteNome } from './styles';
import bannerImage from '../../assets/images/banner.png';

interface BannerProps {
    categoria: string;
    nomeRestaurante: string;
}

const Banner: React.FC<BannerProps> = ({ categoria, nomeRestaurante }) => {
    return (
        <BannerContainer style={{ backgroundImage: `url(${bannerImage})` }}>
            <ContentContainer>
                <Categoria>{categoria}</Categoria>
                <RestauranteNome>{nomeRestaurante}</RestauranteNome>
            </ContentContainer>
        </BannerContainer>
    );
};

export default Banner;
