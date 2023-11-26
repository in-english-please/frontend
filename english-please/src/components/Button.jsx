// import statements
import './Button.css';
import { useNavigate } from 'react-router-dom';
import { useRef, useState} from "react";
import redFlag from '../images/flag.png'
import uploadSym from '../images/upload.png'
import Flags from './Flags'
import ToDoList from './ToDoList'

// component
export default function Button(){
    // this initializes a React ref, this is used to reference input element
    const inputRef = useRef(null);

    // initializes navigate, a react hook returning a function that navigates to page
    const navigate = useNavigate();

    const [buttonPopup, setButtonPopup] = useState(false) 

    // a function that gets involved whenever the user clicks on the upload button
    // whenever the user clicks on the current inputRef
    const handleImageClick = () => {
        inputRef.current.click();
    }

    // function to store the file asynchronously
    const storeFileAsync = async (file) => {
        try {
            const response = await fetch(`https://in-english-please-service.onrender.com/upload`, {
                method: 'POST',
                body: JSON.stringify(file)
                // form data object
                // node side include multipart breakdown
            })
            
            if (!response.ok){
                throw new Error('HTTP error!')
            }

        } catch (err){
            console.log(err)
        }
    };

    // whenever the user selects an image file w/ file input
    // updates image state
    const handleImageChange = async (event) => {
        const file = event.target.files[0];
        try{
            await storeFileAsync(file);

            navigate('/informationPage')
        } catch(error){
            console.log(error)
        }
    }

    return(
        <div className = "interactables">
            <div id = "uploadBtn" onClick={handleImageClick}>
                <input type="file" ref={inputRef} onChange={handleImageChange} style = {{display: "none"}}></input>
                <button id = "uploadBtn">Upload Your Image!<img id = "uploadSym" src = {uploadSym} alt = "symbol"/></button>
            </div>
            <div id = "flag-container">
                <p>OR</p> <p onClick= {() => {setButtonPopup(true)}} id = "red-text">ADD YOUR FLAGS</p> <img id = "red-flag" src = {redFlag} alt = 'flag-icon'/>
                <Flags trigger = {buttonPopup} setTrigger = {setButtonPopup}>
                    <ToDoList/>
                </Flags>
            </div>
        </div>
    )
}