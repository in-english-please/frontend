import React from 'react-dom';
import tempImg from "../images/ingredientLabel.jpg";

function UploadedImage(props){
    console.log(props.image)

    return(
        <div id='imgContainer'>
            {props.image && <img src={URL.createObjectURL(props.image)} alt="placeholder" />}
        </div>
    )
};

export default UploadedImage;