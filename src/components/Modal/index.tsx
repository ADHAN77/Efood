import React from 'react';
import { ModalContainer, ModalContent, ModalImage, ModalTextContainer, ModalTitle, ModalDescription, ModalPorcao, ModalButton, CloseButton } from './styles';
import closeIcon from '../../assets/images/close.png'; 

interface ModalProps {
    product: {
        id: number;
        foto: string;
        nome: string;
        descricao: string;
        preco: number;
        porcao: string;
    };
    onClose: () => void;
    addToCart: () => void;
}

const Modal: React.FC<ModalProps> = ({ product, onClose, addToCart }) => {
    const handleAddToCart = () => {
        addToCart();
        onClose();
    };

    return (
        <ModalContainer>
            <ModalContent>
                <CloseButton onClick={onClose}>
                    <img src={closeIcon} alt="Fechar" />
                </CloseButton>
                <ModalImage src={product.foto} alt={product.nome} />
                <ModalTextContainer>
                    <ModalTitle>{product.nome}</ModalTitle>
                    <ModalDescription>{product.descricao}</ModalDescription>
                    <ModalPorcao>Serve: {product.porcao}</ModalPorcao>
                    <ModalButton onClick={handleAddToCart}>
                        Adicionar ao carrinho - R${product.preco}
                    </ModalButton>
                </ModalTextContainer>
            </ModalContent>
        </ModalContainer>
    );
};

export default Modal;

