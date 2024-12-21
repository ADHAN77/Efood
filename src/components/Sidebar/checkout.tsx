import { useFormik } from 'formik';
import {
    CardDetailsContainer,
    ContinueButton,
    FormInput,
    FormLabel,
    InlineContainer,
    SidebarContainer,
    SidebarContent,
    ThankYouText,
    TitleCheckout
} from './styles';
import React, { useState } from 'react';
import * as Yup from 'yup'
import InputMask from 'react-input-mask';

interface Product {
    id: number;
    preco: number;
}

interface CheckoutProps {
    onBackToCart: () => void;
    cartItems: Product[];
    total: number;
    clearCart: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onBackToCart, cartItems, total, clearCart }) => {
    const [isPayment, setIsPayment] = useState(false);
    const [orderId, setOrderId] = useState<string>('');
    const [isThankYou, setIsThankYou] = useState(false);

    const handleContinuePayment = () => {
        setIsPayment(true);
    };

    const form = useFormik({
        initialValues: {
            receiver: '',
            description: '',
            city: '',
            zipCode: '',
            number: '',
            complement: '',
            nameCard: '',
            numberCard: '',
            cvv: '',
            monthExpires: '',
            yearExpires: '',
        },
        validationSchema: Yup.object({
            receiver: Yup.string()
                .min(5, 'O nome precisa ter pelo menos 5 caracteres')
                .required('O campo é obrigatório'),
            description: Yup.string().required('O campo é obrigatório'),
            city: Yup.string().required('O campo é obrigatório'),
            zipCode: Yup.string()
                .matches(/^\d{5}-\d{3}$/, 'O CEP deve estar no formato 00000-000')
                .required('O campo é obrigatório'),
            number: Yup.number()
                .required('O campo é obrigatório'),
            nameCard: Yup.string().required('O campo é obrigatório'),
            numberCard: Yup.string()
                .required('O campo é obrigatório'),
            cvv: Yup.string()
                .matches(/^\d{3}$/, 'O CVV deve ter exatamente 3 dígitos')
                .required('O campo é obrigatório'),
            monthExpires: Yup.string()
                .matches(/^\d{2}$/, 'O mês de expiração deve ter exatamente 2 dígitos')
                .test('is-valid-month', 'O mês deve ser entre 01 e 12', (value) => {
                    const month = parseInt(value || '', 10);
                    return month >= 1 && month <= 12;
                })
                .required('O campo é obrigatório'),
            yearExpires: Yup.string()
                .matches(/^\d{2}$/, 'O ano de expiração deve ter exatamente 2 dígitos')
                .test('is-valid-year', 'O ano de expiração deve ser maior que 24', (value) => {
                    const year = parseInt(value || '', 10);
                    return year >= 25;
                })
                .required('O campo é obrigatório'),
        }),
        onSubmit: (values) => {
            const payload = {
                products: cartItems.map((item) => ({
                    id: item.id,
                    price: item.preco || 0,
                })),
                delivery: {
                    receiver: values.receiver,
                    address: {
                        description: values.description,
                        city: values.city,
                        zipCode: values.zipCode,
                        number: parseInt(values.number, 10),
                        complement: values.complement || "",
                    },
                },
                payment: {
                    card: {
                        name: values.nameCard,
                        number: values.numberCard,
                        code: parseInt(values.cvv, 10),
                        expires: {
                            month: parseInt(values.monthExpires, 10),
                            year: parseInt(values.yearExpires, 10),
                        },
                    },
                },
            };
        
            console.log('Dados enviados para a API:', JSON.stringify(payload, null, 2));
        
            fetch('https://fake-api-tau.vercel.app/api/efood/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Erro na API: ${response.statusText}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log('Resposta da API:', data);
                    if (data && data.orderId) {
                        const orderId = data.orderId;
                        setOrderId(orderId);
                        setIsThankYou(true);
                        clearCart();
                    } else {
                        console.error('Erro: orderId não encontrado na resposta da API');
                    }
                })
                .catch((error) => {
                    console.error('Erro ao enviar o pedido:', error);
                });
        },
        
    });

    const areSpecificFieldsValid =
    form.values.receiver &&
    !form.errors.receiver &&
    form.values.description &&
    !form.errors.description &&
    form.values.city &&
    !form.errors.city &&
    form.values.zipCode &&
    !form.errors.zipCode &&
    form.values.number &&
    !form.errors.number;

    const getErrorMessage = (fieldName: string, message?: string) => {
        const estaAlterado = fieldName in form.touched;
        const estaInvalido = fieldName in form.errors;

        if (estaAlterado && estaInvalido) return message;
        return '';
    };

    return (
<SidebarContainer>
    <form onSubmit={form.handleSubmit}>
        <SidebarContent> 
            {isThankYou ? (
                // Mensagem de agradecimento
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
                        onClick={() => window.location.reload()}
                        >
                            Concluir
                        </ContinueButton>
                    </SidebarContent>
                </SidebarContainer>
            ) : !isPayment ? (
                // Fase de Entrega
                <>
                    <TitleCheckout>Entrega</TitleCheckout>
                    <FormLabel htmlFor="receiver">Quem irá receber</FormLabel>
                    <FormInput
                        id="receiver"
                        type="text"
                        name="receiver"
                        value={form.values.receiver}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        onMouseEnter={() => form.setFieldTouched('receiver', true)}
                    />
                    <small>{getErrorMessage('receiver', form.errors.receiver)}</small>
                    <br />
                    <FormLabel htmlFor="description">Endereço</FormLabel>
                    <FormInput
                        id="description"
                        type="text"
                        name="description"
                        value={form.values.description}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        onMouseEnter={() => form.setFieldTouched('description', true)}
                    />
                    <small>{getErrorMessage('description', form.errors.description)}</small>
                    <br />
                    <FormLabel htmlFor="city">Cidade</FormLabel>
                    <FormInput
                        id="city"
                        type="text"
                        name="city"
                        value={form.values.city}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        onMouseEnter={() => form.setFieldTouched('city', true)}
                    />
                    <small>{getErrorMessage('city', form.errors.city)}</small>
                    <InlineContainer>
                        <div>
                            <FormLabel htmlFor="zipCode">CEP</FormLabel>
                            <InputMask
                                id="zipCode"
                                name="zipCode"
                                value={form.values.zipCode}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                mask="99999-999"
                                onMouseEnter={() => form.setFieldTouched('zipCode', true)}
                            >
                                {(inputProps) => <FormInput {...inputProps} />}
                            </InputMask>
                            <small>{getErrorMessage('zipCode', form.errors.zipCode)}</small>
                        </div>
                        <div>
                            <FormLabel htmlFor="number">Número</FormLabel>
                            <FormInput
                                id="number"
                                type="text"
                                name="number"
                                value={form.values.number}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                onMouseEnter={() => form.setFieldTouched('number', true)}
                            />
                            <small>{getErrorMessage('number', form.errors.number)}</small>
                        </div>
                    </InlineContainer>
                    <FormLabel htmlFor="complement">Complemento (opcional)</FormLabel>
                    <FormInput
                        id="complement"
                        type="text"
                        name="complement"
                        value={form.values.complement}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />
                    <div>
                        <ContinueButton
                            className="margin-top" 
                            type="button" 
                            onClick={handleContinuePayment} 
                            disabled={!areSpecificFieldsValid} 
                        > 
                            Continuar com o pagamento 
                        </ContinueButton> 
                        <ContinueButton type="button" onClick={onBackToCart}> 
                            Voltar para o carrinho
                        </ContinueButton>
                    </div>
                </>
            ) : (
                // Fase de Pagamento (Cartão de Crédito)
                <>
                    <TitleCheckout>Pagamento - Valor a pagar R$ {total.toFixed(2)}</TitleCheckout>
                    <FormLabel htmlFor="nameCard">Nome no Cartão</FormLabel>
                    <FormInput
                        id="nameCard"
                        type="text"
                        name="nameCard"
                        value={form.values.nameCard}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        onMouseEnter={() => form.setFieldTouched('nameCard', true)}
                    />
                    <small>{getErrorMessage('nameCard', form.errors.nameCard)}</small>
                    <CardDetailsContainer>
                        <div>
                            <FormLabel htmlFor="numberCard">Número do Cartão</FormLabel>
                            <InputMask
                                id="numberCard"
                                name="numberCard"
                                value={form.values.numberCard}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                mask="9999 9999 9999 9999"
                                onMouseEnter={() => form.setFieldTouched('numberCard', true)}
                            >
                                {(inputProps) => <FormInput {...inputProps} />}
                            </InputMask>
                            <small>{getErrorMessage('numberCard', form.errors.numberCard)}</small>
                        </div>
                        <div>
                            <FormLabel htmlFor="cvv">CVV</FormLabel>
                            <InputMask
                                id="cvv" 
                                name="cvv"
                                value={form.values.cvv}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                mask="999"
                                onMouseEnter={() => form.setFieldTouched('cvv', true)}
                            >
                                {(inputProps) => <FormInput {...inputProps} />}
                            </InputMask>
                            <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
                        </div>
                    </CardDetailsContainer>
                    <InlineContainer>
                        <div>
                            <FormLabel htmlFor="monthExpires">Mês de vencimento</FormLabel>
                            <InputMask
                                id="monthExpires"
                                name="monthExpires"
                                value={form.values.monthExpires}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                mask="99"
                                onMouseEnter={() => form.setFieldTouched('monthExpires', true)}
                            >
                                {(inputProps) => <FormInput {...inputProps} />}
                            </InputMask>
                            <small>{getErrorMessage('monthExpires', form.errors.monthExpires)}</small>
                        </div>
                        <div>
                            <FormLabel htmlFor="yearExpires">Ano de vencimento</FormLabel>
                            <InputMask
                                id="yearExpires"
                                name="yearExpires"
                                value={form.values.yearExpires}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                mask="99"
                                onMouseEnter={() => form.setFieldTouched('yearExpires', true)}
                            >
                                {(inputProps) => <FormInput {...inputProps} />}
                            </InputMask>
                            <small>{getErrorMessage('yearExpires', form.errors.yearExpires)}</small>
                        </div>
                    </InlineContainer>
                    <ContinueButton type="submit">Finalizar pagamento</ContinueButton>
                </>
            )}
        </SidebarContent>
    </form>
</SidebarContainer>

    );
};


export default Checkout;