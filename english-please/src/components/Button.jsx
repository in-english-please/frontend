import './Button.css';
import { Link } from 'react-router-dom';

export default function Button(){
    return(
        <div id = "uploadBtn">
            <input type = "file"></input>
            <Link to = "/mona"><button>CLICK ON ME</button></Link>
        </div>
    )
}