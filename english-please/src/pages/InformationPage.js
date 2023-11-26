import React from 'react';
import './InformationPage.css';
import UploadedImage from '../components/UploadedImage';
import IngredientList from '../components/IngredientList';
import { useContext } from 'react';
import { UserContext } from '../index'


export default function InformationPage() {
    const imageText = "Sugar, milk, eggs, salt, lemon juice, bread, chicken, celery, peach, orange juice, tumeric";
    const { image } = useContext(UserContext)
    
    return(
        <>
            <div id = "rectangle"></div>
            <div id="image"><UploadedImage image = {image}/></div>
            <div id="info"><IngredientList ingredients={imageText}/></div>
        </>
    )
};