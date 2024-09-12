import './style.css';

import { landingUI } from './landing/landingUI';
import { login } from './landing/login/login';
import { loggedInUI } from './loggedIn/loggedInUI';
function index(){
    let result=login()
    if(result){
        loggedInUI()
        console.log(localStorage.getItem("email"),localStorage.getItem("username"))
    } else {
        landingUI()
    }
}
document.body.appendChild(index());