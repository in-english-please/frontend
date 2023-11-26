import React, { useContext, useState } from 'react';
import FlaggedItem from './FlaggedItem';
import { UserContext } from '..';
import './IngredientList.css';

const getIngredientMap = (data) => {
    if (!data) return {};

    let m = {};
    for (let t of data.translatedArray) {
        m[t.originalName] = t.translation
    }
    return m;
}

// move the span a little further to make sure it doesn't interfere with the mouse
const mouseOffset = 5;

function IngredientList(props){
    const { data } = useContext(UserContext);
    const [tooltipText, setTooltipText] = useState(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const {flags, setFlags} = useContext(UserContext);

    const handleMouseMove = (ev) => {
        setPos({
            x: ev.clientX,
            y: ev.clientY,
        });
    }

    const ingredientMap = getIngredientMap(data);
    
    let ingredientsList = [];

    let i = 0;

    const textFlags = flags.map(f => f.text);

    if (data && data.originalIngredientsArray) {
        for (const ingredient of data.originalIngredientsArray) {
            const highlight = textFlags.includes(ingredient);
            if (ingredient in ingredientMap) {
                ingredientsList.push(
                    <span
                        key={i}
                        onMouseEnter={() => {
                            setTooltipText(ingredientMap[ingredient]);
                        }}
                        onMouseLeave={() => {
                            setTooltipText(null);
                        }}
                        style={highlight ? {
                            textDecoration: "underline",
                            color: "red"
                        } : {}
                    }
                    >
                        <b>{ingredient},</b>
                    </span>
                )
            }
            else {
                ingredientsList.push(
                    <span
                        key={i}
                        style={highlight ? {
                            textDecoration: "underline",
                            color: "red"
                        } : {}
                    }
                    >{ingredient},</span>
                )
            }
            i++;
        }
    }

    return(
        <div onMouseMove={(ev)=> handleMouseMove(ev)}>
            <h2>Ingredients:</h2>
            <div className='ingredient-container'>{ingredientsList}</div>
            <br />
            <h4>Flagged items that appear in this item:</h4>
            <FlaggedItem flags={JSON.parse(localStorage.getItem('flags')).map(item => item.text)}/>
            <span
                className='translation-hover'
                hidden={!tooltipText}
                style={{
                  left: pos.x + mouseOffset,
                  top: pos.y + mouseOffset,
                }}
            >{tooltipText}</span>
        </div>
    )
}

export default IngredientList;