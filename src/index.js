import './style.css';
import { checkIfLogged } from './landing/checkIfLogged';
import { landingUI } from './landing/landingUI';
function index(){
    let result=checkIfLogged()
    if(result){

    } else {
        landingUI()
    }
}
document.body.appendChild(index());