import React from 'react';
import { FooterContainer, Logo, IconsContainer, Icon, FooterText } from './styles';
import logo from '../../assets/images/logo.png';
import icon1 from '../../assets/images/instagram.png';
import icon2 from '../../assets/images/facebook.png';
import icon3 from '../../assets/images/twitter.png';

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <Logo src={logo} alt="Logo" />
            <IconsContainer>
                <Icon src={icon1} alt="Ícone 1" />
                <Icon src={icon2} alt="Ícone 2" />
                <Icon src={icon3} alt="Ícone 3" />
            </IconsContainer>
            <FooterText>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.</FooterText>
        </FooterContainer>
    );
};

export default Footer;