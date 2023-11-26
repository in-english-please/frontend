import React from 'react';
import './InformationPage.css';
import UploadedImage from '../components/UploadedImage';
import IngredientList from '../components/IngredientList';
import { useContext, useState} from 'react';
import { UserContext } from '../index'
import flag from '../images/flag.png'
import Flags from '../components/Flags'
import ToDoList from '../components/ToDoList'

export default function InformationPage() {
    const imageText = "Sugar, milk, eggs, salt, lemon juice, bread, chicken, celery, peach, orange juice, tumeric";
    const { image } = useContext(UserContext)
    const [buttonPopup, setButtonPopup] = useState(false) 

    return(
        <>
            <div id = "header-bar">
                <p id = "header-text">In English Please!</p>
                <div id = "flex-container"><p onClick= {() => {setButtonPopup(true)}} id = "view-text">View Flags!</p> <img id = "flag-img" src = {flag}/></div>
            </div>
            <div id = "rectangle"></div>
            <div id="image"><UploadedImage image = {image}/></div>
            <div id="info"><IngredientList ingredients={imageText}/></div>

            <Flags trigger = {buttonPopup} setTrigger = {setButtonPopup}>
                <ToDoList/>
            </Flags>
        </>
    )
};