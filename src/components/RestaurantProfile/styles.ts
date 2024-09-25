import styled from 'styled-components';
import { Cores } from '../../styles';

export const ProfileContainer = styled.div`
    position: relative;
    width: 471px;
    margin-bottom: 24px;
`;

export const RestaurantImageContainer = styled.div`
    width: 472px;
    height: 217px;
    overflow: hidden;
`;

export const RestaurantImage = styled.img`
    width: 100%;
    height: auto;
    max-height: 217px;
    object-fit: cover;
    display: block;
`;

export const Content = styled.div`
    width: 471px;
    padding: 8px;
    background-color: ${Cores.branco};
    border: solid 1px ${Cores.salmao};
    border-top: none;
`;

export const CategoryContainer = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    align-items: center;
`;

export const Highlight = styled.div`
    background-color: ${Cores.salmao};
    color: ${Cores.bege2};
    font-size: 12px;
    font-weight: 700;
    padding: 6px 16px;
    margin-right: 8px;
    cursor: pointer;
    text-align: center;
`;

export const Category = styled.div`
    background-color: ${Cores.salmao};
    color: ${Cores.bege2};
    font-size: 12px;
    font-weight: 700;
    padding: 6px 16px;
    cursor: pointer;
    text-align: center;
`;

export const Title = styled.h3`
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    text-align: left;
`;

export const Description = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    margin-top: 16px;
`;

export const MoreInfoButton = styled.button`
    width: 82px;
    height: 24px;
    background-color: ${Cores.salmao};
    color: ${Cores.bege2};
    border: none;
    cursor: pointer;
    margin-top: 10px;
`;

export const RatingContainer = styled.div`
    display: flex;
    align-items: center;
`;
