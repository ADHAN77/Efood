import React, { useEffect, useState } from 'react';
import RestaurantProfile from './RestaurantProfile';
import { Container } from '../styles';


interface Restaurante {
    id: number;
    titulo: string;
    destacado: boolean;
    tipo: string;
    avaliacao: number;
    descricao: string;
    capa: string;
    cardapio: {
        foto: string;
        preco: number;
        id: number;
        nome: string;
        descricao: string;
        porcao: string;
    }[];
}

const RestaurantProfileList: React.FC = () => {
    const [restaurants, setRestaurants] = useState<Restaurante[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes');
                const data = await response.json();
                setRestaurants(data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar os dados: ', error);
                setLoading(false);
            }
        };

        fetchRestaurants();
    }, []);

    if (loading) {
        return <p>Carregando...</p>;
    }

    return (
        <Container>
            {restaurants.map((restaurant) => (
                <RestaurantProfile
                    key={restaurant.id}
                    id={restaurant.id}
                    image={restaurant.capa} 
                    highlight={restaurant.tipo}
                    title={restaurant.titulo}
                    description={restaurant.descricao}
                    rating={restaurant.avaliacao}
                    destaque={restaurant.destacado}
                />
            ))}
        </Container>
    );
};

export default RestaurantProfileList;

