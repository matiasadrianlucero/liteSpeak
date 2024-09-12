import { logoutBackend } from "./logoutBackend";
import {landingUI} from "../../landing/landingUI"
function logout(){
    logoutBackend()
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("contacts");
    localStorage.removeItem("loginToken");
    landingUI()
}
export {logout}