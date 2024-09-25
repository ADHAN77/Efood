
import { Card, CardImage, CardTitle, CardDescription, CardButton, ProductGrid } from './styles';
import pizza from '../../assets/images/pizza.png'

const ProductList = () => {
    const products = [
        {
            id: 1,
            image: pizza,
            title: 'Pizza Marguerita',
            description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        },
        {
            id: 2,
            image: pizza,
            title: 'Pizza Marguerita',
            description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        },
        {
            id: 3,
            image: pizza,
            title: 'Pizza Marguerita',
            description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        },
        {
            id: 4,
            image: pizza,
            title: 'Pizza Marguerita',
            description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        },
        {
            id: 5,
            image: pizza,
            title: 'Pizza Marguerita',
            description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        },
        {
            id: 6,
            image: pizza,
            title: 'Pizza Marguerita',
            description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        },
    ];

    return (
        <ProductGrid>
            {products.map((product) => (
                <Card key={product.id}>
                    <CardImage src={product.image} alt={product.title} />
                    <CardTitle>{product.title}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                    <CardButton>Adicionar ao carrinho</CardButton>
                </Card>
            ))}
        </ProductGrid>
    );
};

export default ProductList;