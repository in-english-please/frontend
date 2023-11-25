// import statements
import './Button.css';
import { Link } from 'react-router-dom';
import {useRef } from "react";

// component
export default function Button(){
    // this initializes a React ref, this is used to reference input element
    const inputRef = useRef(null);
    // a function that gets involved whenever the user clicks on the upload button
    // whenever the user clicks on the current inputRef
    const handleImageClick = () => {
        inputRef.current.click();
    }

    // whenever the user selects an image file w/ file input
    // updates image state
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file)
        //setImage(event.target.files[0])
    }

    return(
        <div>
            <div id="uploadBtn" onClick={handleImageClick}>
                <input type="file" ref={inputRef} onChange={handleImageChange} style = {{display: "none"}}></input>
                <button onClick = {() => {
                    // insert connection to backend
                    
                }}>Upload Your Image!</button>
            </div>
            <Link to="/informationPage"><button>Upload File!</button></Link>
        </div>
    )
}