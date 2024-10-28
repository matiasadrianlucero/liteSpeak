export function notification(message){
    let notificationBodyDiv=document.getElementById("loggedInUI")
    let notificationDiv=document.createElement("div")
    notificationDiv.id="notificationDiv"
    notificationDiv.innerHTML=message
    
    notificationBodyDiv.appendChild(notificationDiv)
    setTimeout(()=>{
        notificationDiv.remove()
    },3000)
}