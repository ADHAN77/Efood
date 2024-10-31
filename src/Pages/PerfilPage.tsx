import React, { useEffect, useState } from 'react';
import PerfilHeader from '../components/PerfilHeader';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import ProductList from '../components/ProductList';
import Sidebar from '../components/Sidebar';
import { useParams } from 'react-router-dom';

interface Cardapio {
    foto: string;
    preco: number;
    id: number;
    nome: string;
    descricao: string;
    porcao: string;
}

interface RestaurantData {
    id: number;
    titulo: string;
    destacado: boolean;
    tipo: string;
    avaliacao: number;
    descricao: string;
    capa: string;
    cardapio: Cardapio[];
}

const PerfilPage: React.FC = () => {
    const { id: restaurantId } = useParams<{ id: string }>();
    const [restaurantData, setRestaurantData] = useState<RestaurantData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [cartItems, setCartItems] = useState<Cardapio[]>([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    const addToCart = (product: Cardapio) => {
        const updatedCart = [...cartItems, product];
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    const removeFromCart = (id: number) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    const handleCartClick = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    useEffect(() => {
        const storedCart = localStorage.getItem('cartItems');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }

        const fetchRestaurantData = async () => {
            try {
                const response = await fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${restaurantId}`);
                const data: RestaurantData = await response.json();
                setRestaurantData(data);
            } catch (error) {
                console.error("Erro ao carregar os dados do restaurante:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRestaurantData();
    }, [restaurantId]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <>
            <PerfilHeader cartCount={cartItems.length} onCartClick={handleCartClick} />
            {restaurantData && (
                <>
                    <Banner
                        categoria={restaurantData.tipo}
                        nomeRestaurante={restaurantData.titulo}
                        fotoRestaurante={restaurantData.capa}
                    />
                    <ProductList
                        products={restaurantData.cardapio}
                        addToCart={addToCart}
                    />
                </>
            )}
            <Footer />
            {isSidebarOpen && (
                <Sidebar 
                    cartItems={cartItems} 
                    onClose={closeSidebar} 
                    removeFromCart={removeFromCart}
                />
            )}
        </>
    );
};

export default PerfilPage;
