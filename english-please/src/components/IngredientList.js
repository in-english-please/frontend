import React from 'react';
import FlaggedItem from './FlaggedItem';

function IngredientList(props){
    return(
        <>
            <h2>Ingredients:</h2>
            <p>{props.ingredients}</p>
            <FlaggedItem flags={["apples", "banana"]}/>
        </>
    )
}

export default IngredientList;