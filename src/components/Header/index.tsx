import { HeaderImage, Logo, Titulo } from './styles'

import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

const Header = () => (
    <HeaderImage style={{ backgroundImage: `url(${fundo})` }}>
        <Logo src={logo} alt='Efood' />
        <Titulo>
        Viva experiências gastronômicas no conforto da sua casa
        </Titulo>
    </HeaderImage>
)

export default Header