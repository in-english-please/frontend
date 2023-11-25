import './HeaderText.css';
import Button from './Button';

export default function HeaderText(){
    return(
        <div id = "text-div">
            <div class = "circle">
                <p id = "header">In English Please!</p>
                <p id = "desc">Don’t know what ingredients are in your food?<br />
                Companies hiding details in corporate buzzwords?<br />
                Let’s change that!</p>
                <Button/>
            </div>
        </div>
    )
}