import React, { useContext } from 'react';
import FlaggedItem from './FlaggedItem';
import { UserContext } from '..';
import './IngredientList.css';

const getIngredientMap = (data) => {
    let m = {};
    for (let t of data.translatedArray) {
        m[t.originalName] = t.translation
    }
    return m;
}

function IngredientList(props){
    const { data, setData } = useContext(UserContext);

    const ingredientMap = getIngredientMap(data);

    console.log("data: ", data)
    
    let ingredientsList = [];

    let i = 0;

    if (data && data.originalIngredientsArray) {
        for (const ingredient of data.originalIngredientsArray) {
            if (ingredient in ingredientMap) {
                ingredientsList.push(<span key={i}><b>{ingredient},</b></span>)
            }
            else {
                ingredientsList.push(<span key={i}>{ingredient},</span>)
            }
            i++;
        }
    }

    return(
        <>
            <h2>Ingredients:</h2>
            <div className='ingredient-container'>{ingredientsList}</div>
            <br />
            <h4>Flagged items that appear in this item:</h4>
            <FlaggedItem flags={JSON.parse(localStorage.getItem('flags')).map(item => item.text)}/>
        </>
    )
}

export default IngredientList;