import React from 'react';
import { 
    ProfileContainer, 
    RestaurantImage, 
    Content, 
    Title, 
    Description, 
    MoreInfoButton, 
    RatingContainer, 
    CategoryContainer, 
    Highlight, 
    Category 
} from './styles';
import Rating from '../Rating';
import { useNavigate } from 'react-router-dom';

interface RestaurantProfileProps {
    id: number;
    image: string;
    highlight: string;
    title: string;
    description: string;
    rating: number;
    destaque?: boolean;
}

const RestaurantProfile: React.FC<RestaurantProfileProps> = ({ id, image, highlight, title, description, rating, destaque }) => {
    const navigate = useNavigate();

    const handleMoreInfoClick = () => {
        navigate(`/Perfil/${id}`);
    };

    return (
        <ProfileContainer>
            <RestaurantImage src={image} alt={title} />
            <CategoryContainer>
                {destaque && <Highlight>Destaque da semana</Highlight>}
                <Category>{highlight}</Category>
            </CategoryContainer>
            <Content>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Title>{title}</Title>
                    <RatingContainer>
                        <Rating value={rating} />
                    </RatingContainer>
                </div>
                <Description>{description}</Description>
                <MoreInfoButton onClick={handleMoreInfoClick}>Saiba mais</MoreInfoButton>
            </Content>
        </ProfileContainer>
    );
};

export default RestaurantProfile;

