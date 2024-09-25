import React from 'react';
import RestaurantProfile from './RestaurantProfile';
import { restaurants } from '../data/restaurants';
import { Container } from '../styles';

const RestaurantProfileList: React.FC = () => {
    return (
    <Container>
        {restaurants.map((restaurant) => (
        <RestaurantProfile
            key={restaurant.id}
            image={restaurant.image}
            highlight={restaurant.highlight}
            title={restaurant.title}
            description={restaurant.description}
            rating={restaurant.rating}
            destaque={restaurant.destaque}
        />
        ))}
    </Container>
    );
};

export default RestaurantProfileList;