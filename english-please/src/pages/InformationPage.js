import React from 'react';
import './InformationPage.css';
import UploadedImage from '../components/UploadedImage';
import IngredientList from '../components/IngredientList';
import { useContext } from 'react';
import { UserContext } from '../index'


import { importantData } from '../components/Button';

export default function InformationPage() {
<<<<<<< Updated upstream
    const imageText = "Sugar, milk, eggs, salt, lemon juice, bread, chicken, celery, peach, orange juice, tumeric";
    const { image } = useContext(UserContext)
    
    return(
        <>
            <div id = "rectangle"></div>
            <div id="image"><UploadedImage image = {image}/></div>
            <div id="info"><IngredientList ingredients={imageText}/></div>
=======

    const translations = (importantData.translatedArray).map(item => item.translation);
    let responseIngredients = "";

    for(let translation of translations){
        responseIngredients += translation + ", ";
    }

    return(
        <>
            <div id = "rectangle"></div>

            <div id="image"><UploadedImage image = {flagImage}/></div>
            <div id="info"><IngredientList ingredients={responseIngredients}/></div>

>>>>>>> Stashed changes
        </>
    )
};