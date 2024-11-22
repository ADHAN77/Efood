import React, { useState } from 'react';
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
    FormLabel,
    FormInput,
    TitleCheckout,
    InlineContainer,
    CardDetailsContainer,
    ThankYouText,
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
    clearCart: () => void; 
}

const Sidebar: React.FC<SidebarProps> = ({ cartItems, onClose, removeFromCart, clearCart}) => {
    const [currentStep, setCurrentStep] = useState<'cart' | 'delivery' | 'payment' | 'thankYou'>('cart');
    const [deliveryDetails, setDeliveryDetails] = useState({
        recipient: '',
        address: '',
        city: '',
        cep: '',
        number: '',
        complement: '',
    });
    const [paymentDetails, setPaymentDetails] = useState({
        cardName: '',
        cardNumber: '',
        cvv: '',
        expMonth: '',
        expYear: '',
    });
    const [orderId, setOrderId] = useState<string | null>(null);

    const handleContinueToDelivery = () => setCurrentStep('delivery');
    const handleContinueToPayment = () => setCurrentStep('payment');
    const handleBackToCart = () => setCurrentStep('cart');

    const handleFinalizePayment = () => {
        const generatedOrderId = 'ORDER_' + Math.random().toString(36).substr(2, 9).toUpperCase();
        setOrderId(generatedOrderId);
        handleSendCheckoutData(generatedOrderId);
        setCurrentStep('thankYou');
    };

    const handleSendCheckoutData = async (orderId: string) => {
        const orderData = {
            orderId, 
            cartItems: cartItems.map(item => ({
                id: item.id,
                price: item.preco,
            })),
            deliveryDetails,
            paymentDetails,
        };
    
        try {
            const response = await fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });
    
            if (response.ok) {
                console.log('Pedido realizado com sucesso!');
            } else {
                console.error('Erro ao realizar pedido');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    };

    const total = cartItems.reduce((sum, item) => sum + item.preco, 0);

    const handleOverlayClick = (e: React.MouseEvent) => {

        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    

    return (
        <>
            <Overlay className="overlay" onClick={handleOverlayClick} />
            <SidebarContainer>
                <SidebarContent>
                    {currentStep === 'cart' && (
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
                                    <ContinueButton onClick={handleContinueToDelivery}>
                                        Continuar com a entrega
                                    </ContinueButton>
                                </>
                            )}
                        </>
                    )}
                    {currentStep === 'delivery' && (
    <SidebarContainer>
        <SidebarContent>
            <TitleCheckout>Entrega</TitleCheckout>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleContinueToPayment();
            }}>
                <FormLabel htmlFor="receptor">Quem irá receber</FormLabel>
                <FormInput 
                    id="receptor"
                    type="text"
                    required
                    value={deliveryDetails.recipient} 
                    onChange={(e) => setDeliveryDetails({ ...deliveryDetails, recipient: e.target.value })} 
                />
                <FormLabel htmlFor="endereco">Endereço</FormLabel>
                <FormInput 
                    id="endereco"
                    type="text"
                    required
                    value={deliveryDetails.address} 
                    onChange={(e) => setDeliveryDetails({ ...deliveryDetails, address: e.target.value })} 
                />
                <FormLabel htmlFor="city">Cidade</FormLabel>
                <FormInput 
                    id="city"
                    type="text"
                    required 
                    value={deliveryDetails.city} 
                    onChange={(e) => setDeliveryDetails({ ...deliveryDetails, city: e.target.value })} 
                />
                <InlineContainer>
                    <div>
                        <FormLabel htmlFor="cep">CEP</FormLabel>
                        <FormInput 
                            id="cep"
                            type="text"
                            required
                            value={deliveryDetails.cep} 
                            onChange={(e) => setDeliveryDetails({ ...deliveryDetails, cep: e.target.value })} 
                        />
                    </div>
                    <div>
                        <FormLabel htmlFor="numero">Número</FormLabel>
                        <FormInput 
                            id="numero"
                            type="text"
                            required 
                            value={deliveryDetails.number} 
                            onChange={(e) => setDeliveryDetails({ ...deliveryDetails, number: e.target.value })} 
                        />
                    </div>
                </InlineContainer>
                <FormLabel htmlFor="complemento">Complemento(opcional)</FormLabel>
                <FormInput 
                    id="complemento"
                    type="text"
                    value={deliveryDetails.complement} 
                    onChange={(e) => setDeliveryDetails({ ...deliveryDetails, complement: e.target.value })} 
                />
                <div>
                    <ContinueButton className="margin-top" type="submit">
                        Continuar com o pagamento
                    </ContinueButton>
                    <ContinueButton type="button" onClick={handleBackToCart}>
                        Voltar para o carrinho
                    </ContinueButton>
                </div>
            </form>
        </SidebarContent>
    </SidebarContainer>
)}

{currentStep === 'payment' && (
    <SidebarContainer>
        <SidebarContent>
            <TitleCheckout>Pagamento - Valor a pagar R$ {total.toFixed(2)}</TitleCheckout>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleFinalizePayment();
            }}>
                <FormLabel htmlFor="nomeCard">Nome no Cartão</FormLabel>
                <FormInput 
                    id="nomeCard"
                    type="text"
                    required
                    value={paymentDetails.cardName} 
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, cardName: e.target.value })} 
                />
                <CardDetailsContainer>
                    <div>
                        <FormLabel htmlFor="numeroCard">Número do Cartão</FormLabel>
                        <FormInput 
                            id="numeroCard"
                            type="text"
                            required
                            value={paymentDetails.cardNumber} 
                            onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })} 
                        />
                    </div>
                    <div>
                        <FormLabel htmlFor="cvv">CVV</FormLabel>
                        <FormInput 
                            id="cvv"
                            type="text"
                            required
                            value={paymentDetails.cvv} 
                            onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })} 
                        />
                    </div>
                </CardDetailsContainer>
                <InlineContainer>
                    <div>
                        <FormLabel htmlFor="mesVencimento">Mês de vencimento</FormLabel>
                        <FormInput 
                            id="mesVencimento"
                            type="text"
                            required
                            value={paymentDetails.expMonth} 
                            onChange={(e) => setPaymentDetails({ ...paymentDetails, expMonth: e.target.value })} 
                        />
                    </div>
                    <div>
                        <FormLabel htmlFor="anoVencimento">Ano de vencimento</FormLabel>
                        <FormInput 
                            id="anoVencimento"
                            type="text"
                            required 
                            value={paymentDetails.expYear} 
                            onChange={(e) => setPaymentDetails({ ...paymentDetails, expYear: e.target.value })} 
                        />
                    </div>
                </InlineContainer>
                <ContinueButton type="submit" onClick={clearCart}>
                    Finalizar pagamento
                </ContinueButton>
            </form>
        </SidebarContent>
    </SidebarContainer>
)}
{currentStep === 'thankYou' && (
    <SidebarContainer>
        <SidebarContent>
            <TitleCheckout>
                Pedido realizado - {orderId}
            </TitleCheckout>
            <ThankYouText>
                Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
            </ThankYouText> 
            <br />
            <ThankYouText>
                Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
            </ThankYouText> 
            <br />
            <ThankYouText>
                Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
            </ThankYouText> 
            <br />
            <ThankYouText>
                Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
            </ThankYouText>
            <br />
            <ContinueButton className="margin-top"
            onClick={onClose}>
                Concluir
            </ContinueButton>
        </SidebarContent>
    </SidebarContainer>
)}
                </SidebarContent>
            </SidebarContainer>
        </>
    );
};

export default Sidebar;
