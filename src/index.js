import './style.css';

import { landingUI } from './frontend/landing/landingUI';
import { login } from './frontend/landing/login/login';
import { loggedInUI } from './frontend/loggedIn/loggedInUI';
function index(){
    let result=login()
    if(result){
        loggedInUI()
    } else {
        landingUI()
    }
}
document.body.appendChild(index());