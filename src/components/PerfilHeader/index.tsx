// src/components/PerfilHeader/index.tsx
import React from 'react';
import { HeaderImage, Logo, HomeLink, CartText, HeaderContent, LogoContainer } from './styles';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

interface PerfilHeaderProps {
    cartCount: number;
    onCartClick: () => void;
}

const PerfilHeader: React.FC<PerfilHeaderProps> = ({ cartCount, onCartClick }) => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <HeaderImage>
            <HeaderContent>
                <HomeLink onClick={handleHomeClick}>Restaurantes</HomeLink>
                <LogoContainer>
                    <Logo src={logo} alt='Efood' />
                </LogoContainer>
                <CartText onClick={onCartClick}>{cartCount} produto(s) no carrinho</CartText>
            </HeaderContent>
        </HeaderImage>
    );
};

export default PerfilHeader;
