import React from 'react';
import FlaggedItem from './FlaggedItem';

function IngredientList(props){
    return(
        <>
            <h2>Ingredients:</h2>
            <p>{props.ingredients}</p>
            <br />
            <h4>Flagged items that appear in this item:</h4>
            <FlaggedItem flags={["apples", "banana"]}/>
        </>
    )
}

export default IngredientList;