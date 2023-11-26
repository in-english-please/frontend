import React from 'react';

function IngredientList(props){
    return(
        <> 
            <h2>Ingredients:</h2>
            <p>{props.ingredients}</p>
        </>
    )
}

export default IngredientList;