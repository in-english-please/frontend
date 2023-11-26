import React from 'react';
import "./FlaggedItem.css"

function FlaggedItem(props){
    const {flags} = props;

    return(
        <div>
            {flags.map((flag, index) => (
                <div id="flaggeditem" key={index}>
                    <p>{flag}</p>
                </div>
            ))}
        </div>
    );
}

export default FlaggedItem;