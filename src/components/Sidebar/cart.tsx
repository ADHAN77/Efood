import React, { useState, useEffect } from 'react';
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
import Checkout from './checkout';

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
    clearCart: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ cartItems, onClose, removeFromCart, clearCart }) => {
    const [isCheckout, setIsCheckout] = useState(false); // Estado para controlar a alternância


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

    const handleContinueToCheckout = () => {
        setIsCheckout(true); // Exibe o Checkout
    };

    const handleBackToCart = () => {
        setIsCheckout(false); // Volta ao carrinho
    };


    return (
        <>
            <Overlay className="overlay" />
            <SidebarContainer>
                <SidebarContent>
                    {isCheckout ? (
                        <Checkout onBackToCart={handleBackToCart} cartItems={cartItems} total={total} clearCart={clearCart} />
                    ) : (
                        <>
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
                                    <ContinueButton onClick={handleContinueToCheckout}>
                                        Continuar com o pagamento
                                    </ContinueButton>
                                </>
                            )}
                        </>
                    )}
                </SidebarContent>
            </SidebarContainer>
        </>
    );
};

export default Sidebar;
