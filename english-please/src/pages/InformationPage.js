import React from 'react';
import './InformationPage.css';
import UploadedImage from '../components/UploadedImage';
import IngredientList from '../components/IngredientList';

export default function InformationPage() {
    const imageText = "Sugar, milk, eggs, salt, lemon juice, bread, chicken, celery, peach, orange juice, tumeric";
    return(
        <>
            <div id = "rectangle"></div>

            <div id="image"><UploadedImage /></div>

            <div id="info"><IngredientList ingredients={imageText}/></div>

        </>
    )
};