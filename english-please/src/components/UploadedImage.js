import React from 'react-dom';
import tempImg from "../images/ingredientLabel.jpg";

function UploadedImage(){
    return(
        <div id='imgContainer'>
            <img src={tempImg} alt="placeholder" />
        </div>
        
    )
};

export default UploadedImage;