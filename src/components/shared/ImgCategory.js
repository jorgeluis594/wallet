import React from 'react';
import styled from '@emotion/styled';
import Categories from '../../images/Categories'

const ImgContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background-color: ${props => props.color};
    grid-row-end: span 2;
`;
const ImgCategory = {
    food_and_drinks: <ImgContainer color="#E53E3E"><Categories.FoodAndDrinks/></ImgContainer>,
    services: <ImgContainer color="#4FD1C5"><Categories.Services/></ImgContainer>,
    transport: <ImgContainer color="#ED8936"><Categories.Transport/></ImgContainer>,
    shopping: <ImgContainer color="#63B3ED"><Categories.Shopping/></ImgContainer>,
    others: <ImgContainer color="#718096"><Categories.Other/></ImgContainer>,
    housing: <ImgContainer color="#F6E05E"><Categories.Housing/></ImgContainer>
}

export default ImgCategory;