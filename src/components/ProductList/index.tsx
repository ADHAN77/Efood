// src/components/ProductList/index.tsx
import React, { useState } from 'react';
import { Card, CardImage, CardTitle, CardDescription, CardButton, ProductGrid } from './styles';
import Modal from '../Modal';

interface Product {
    id: number;
    foto: string;
    nome: string;
    descricao: string;
    preco: number;
    porcao: string;
}

interface ProductListProps {
    products: Product[];
    addToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, addToCart }) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMoreDetailsClick = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <ProductGrid>
                {products.map((product) => (
                    <Card key={product.id}>
                        <CardImage src={product.foto} alt={product.nome} />
                        <CardTitle>{product.nome}</CardTitle>
                        <CardDescription>{product.descricao}</CardDescription>
                        <CardButton onClick={() => handleMoreDetailsClick(product)}>Mais detalhes</CardButton>
                    </Card>
                ))}
            </ProductGrid>

            {isModalOpen && selectedProduct && (
                <Modal 
                    product={selectedProduct} 
                    onClose={handleCloseModal} 
                    addToCart={() => addToCart(selectedProduct)} // adiciona o produto específico ao carrinho
                />
            )}
        </>
    );
};

export default ProductList;
