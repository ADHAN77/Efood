import React, { useEffect } from 'react';
import {
    SidebarContainer,
    SidebarContent,
    Overlay,
    ProductCard,
    ProductImage,
    ProductDetails,
    ProductTitle,
    ProductPrice,
    IconContainer,
    BinIcon,
    TotalContainer,
    ContinueButton,
    EmptyCartMessage,
} from './styles';
import lixeira from '../../assets/images/lixeira.png';

interface Product {
    id: number;
    foto: string;
    nome: string;
    preco: number;
}

interface SidebarProps {
    cartItems: Product[];
    onClose: () => void;
    removeFromCart: (id: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ cartItems, onClose, removeFromCart }) => {
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if ((event.target as Element).classList.contains('overlay')) {
                onClose();
            }
        };
        document.addEventListener('click', handleOutsideClick);

        return () => document.removeEventListener('click', handleOutsideClick);
    }, [onClose]);

    const total = cartItems.reduce((sum, item) => sum + item.preco, 0);

    return (
        <>
            <Overlay className="overlay" />
            <SidebarContainer>
                <SidebarContent>
                    {cartItems.length === 0 ? (
                        <EmptyCartMessage>Não há nenhum prato no carrinho.</EmptyCartMessage>
                    ) : (
                        cartItems.map((item) => (
                            <ProductCard key={item.id}>
                                <ProductImage src={item.foto} alt={item.nome} />
                                <ProductDetails>
                                    <ProductTitle>{item.nome}</ProductTitle>
                                    <ProductPrice>R$ {item.preco.toFixed(2)}</ProductPrice>
                                </ProductDetails>
                                <IconContainer onClick={() => removeFromCart(item.id)}>
                                    <BinIcon src={lixeira} alt="Remover item do carrinho" />
                                </IconContainer>
                            </ProductCard>
                        ))
                    )}
                    {cartItems.length > 0 && ( 
                        <>
                            <TotalContainer>
                                <p>Valor total</p>
                                <p>R$ {total.toFixed(2)}</p>
                            </TotalContainer>
                            <ContinueButton>Continuar com a entrega</ContinueButton>
                        </>
                    )}
                </SidebarContent>
            </SidebarContainer>
        </>
    );
};

export default Sidebar;
