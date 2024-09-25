import React from 'react';
import { RatingWrapper, StarIcon } from './styles';

interface RatingProps {
    value: number;
}

const Rating: React.FC<RatingProps> = ({ value }) => {
    return (
        <RatingWrapper>
            {value}
            <StarIcon>⭐</StarIcon>
        </RatingWrapper>
    );
};

export default Rating;
