import { logout } from "../logout/logout"
import { configurationUI } from "../bodyContent/configuration/configurationUI"
function userDetails(){
    let headerDiv=document.getElementById("headerDiv")
    headerDiv.innerHTML=""

    let userUsername=document.createElement("h3")
    userUsername.innerHTML=localStorage.getItem("username")

    let userEmail=document.createElement("h4")
    userEmail.innerHTML=localStorage.getItem("email")

    headerDiv.appendChild(userUsername)
    headerDiv.appendChild(userEmail)
    
    let userDetailsDropdownDiv=document.createElement("div")
    userDetailsDropdownDiv.id="userDetailsDropdownDiv"

    let userPreferences=document.createElement("button")
    userPreferences.innerHTML="Preferences"
    userPreferences.onclick=function(){
        configurationUI()
    }
    
    let userLogout=document.createElement("button")
    userLogout.innerHTML="Logout"
    userLogout.onclick=function(){
        logout()
    }
    userDetailsDropdownDiv.appendChild(userPreferences)
    userDetailsDropdownDiv.appendChild(userLogout)
    
    headerDiv.appendChild(userDetailsDropdownDiv)
    }
export {userDetails}