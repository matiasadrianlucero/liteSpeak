import { retrieveImage } from "./retrieveImage";

export function userDetailsUI(){
    let userDiv=document.getElementById("userDiv")
    userDiv.innerHTML=""
    let userImg=document.createElement("img")
    let imgBackend=retrieveImage(localStorage.getItem("userAvatar"))

    imgBackend.then(function(data){
        var dataURI = "data:image/png;base64," + data;
        userImg.src = dataURI;
    })
    
    let userName=document.createElement("p")
    userName.innerHTML=localStorage.getItem("username")
    userName.id="userName"
    let userEmail=document.createElement("p")
    userEmail.innerHTML=localStorage.getItem("email")
    userEmail.id="userEmail"

    userDiv.appendChild(userImg)
    userDiv.appendChild(userName)
    userDiv.appendChild(userEmail)
}