import React from "react";
import { useState, useEffect } from "react";
import './ToDoList.css'

export default function ToDoList(){
    // used to set the initial value of the flag list
    const getStoredFlags = () => {
        // parses through local storage to find the array known as 'flags'
        const storedFlags = JSON.parse(localStorage.getItem('flags'));
        
        // return the array if it is found, if not return an empty array
        return storedFlags !== null ? storedFlags : [];
    };
    
    // react hook to get the state of the flags
    const [flags, setFlags] = useState(getStoredFlags);

    // react hook to get the new flag state
    const [newFlags, setNewFlags] = useState("");

    // useEffect hook
    useEffect(() => {
        // retrieves value associated with the key 'flags' from localStorage
        const storedFlags = JSON.parse(localStorage.getItem('flags')) || [];
        setFlags(storedFlags);
    }, []);

    // Save the toDos to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('flags', JSON.stringify(flags));
    }, [flags]);

    const handleAddFlag = () => {
        // checks to ensure the trimmed version of newFlags is not empty
        if (newFlags.trim() !== ""){
            // setFlags sets the array equal to flags array spread, adds the new flag at the end of the array
            setFlags([...flags, {text: newFlags.trim(), checked: false}])
            
            // set the new flag equal to an empty string
            setNewFlags("")
        }
    }

    const handleDeleteFlag = (index) => {
        const newFlags = [...flags];
        newFlags.splice(index, 1)
        setFlags(newFlags)
    }

    return (
        <div>
            <h1>To Do List</h1>
            <input type = "text" value = {newFlags} onChange={(e) => setNewFlags(e.target.value)}/>
            <button onClick = {handleAddFlag}>Add</button>
            <ul>
                {flags.map((flag, index) => (
                    <li key = {index}>
                        <span>{flag.text}</span>
                        <button id = "closeBtn" onClick = {() => handleDeleteFlag(index)}> Delete </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}