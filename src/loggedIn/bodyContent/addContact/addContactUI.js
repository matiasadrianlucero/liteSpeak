import { friendRequest } from "../../agenda/contacts/friendRequest"
function addContactUI(){
    let bodyDiv=document.getElementById("bodyDiv")
    bodyDiv.innerHTML=""
    let addContactPlus=document.createElement("p")
    addContactPlus.innerHTML="+"
    let addContactTitle=document.createElement("p")
    addContactTitle.innerHTML="Add a Contact"
    let addContactDescrpiption=document.createElement("p")
    addContactDescrpiption.innerHTML="Type the username or email address of someone you want to add"
    let addContactInput=document.createElement("input")
    addContactInput.type="text"
    addContactInput.placeholder="username or emailaddress@email.com"

    let addContactSubmit=document.createElement("button")
    addContactSubmit.innerHTML="ADD"
    addContactSubmit.onclick=function(){
        friendRequest(addContactInput.value)
    }

    bodyDiv.appendChild(addContactPlus)
    bodyDiv.appendChild(addContactTitle)
    bodyDiv.appendChild(addContactDescrpiption)
    bodyDiv.appendChild(addContactInput)
    bodyDiv.appendChild(addContactSubmit)
}
export {addContactUI}

