import { HeaderImage, Logo, HomeLink, CartText, HeaderContent, LogoContainer } from './styles';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const PerfilHeader = () => {
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
                <CartText>0 produto(s) no carrinho</CartText>
            </HeaderContent>
        </HeaderImage>
    );
};

export default PerfilHeader;