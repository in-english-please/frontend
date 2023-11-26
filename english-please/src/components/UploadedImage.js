import React from 'react-dom';

function UploadedImage(props){
    console.log(props.image)

    return(
        <div id='imgContainer'>
            {props.image && <img src={URL.createObjectURL(props.image)} alt="placeholder" />}
        </div>
    )
};

export default UploadedImage;