import React from 'react-dom';
import './Flags.css'

export default function Flags(props){
    return (props.trigger) ? (
        <div className = "popup">
        <div id = "rectangle-flags-inner">
            <button className = "close-btn" onClick = {() => props.setTrigger(false)}>close</button>
            { props.children }
        </div>
    </div>
    ): "";
}