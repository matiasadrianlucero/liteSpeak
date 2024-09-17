import { retrieveContacts } from "./retrieveContacts"
import { addContactUI } from "../../bodyContent/addContact/addContactUI"
import { eraseContact } from "./eraseContact"
import { displayContact } from "../../bodyContent/displayContact/displayContactUI"
function contactsUI(){
    let contacts=retrieveContacts()
    contacts.then(function(data){
        console.log(data)
        let agendaMainDiv=document.getElementById("agendaMainDiv")
        agendaMainDiv.innerHTML=""
        let addPerson=document.createElement("button")
        addPerson.innerHTML="+"
        addPerson.onclick=function(){
            addContactUI()
        }
        agendaMainDiv.appendChild(addPerson)
    
        data.map((map,index)=>{
            let contactDiv=document.createElement("div")
            let contactImage=document.createElement("img")
            contactImage.src=map[0]
            let contactName=document.createElement("p")
            contactName.innerHTML=map[1]
            contactName.onclick=function(){
                displayContact(map)
            }

            let eraseContactButton=document.createElement("button")
            eraseContactButton.innerHTML="eraseContact"
            eraseContactButton.onclick=function(){
                eraseContact(map[1],localStorage.getItem("id"),localStorage.getItem("loginToken"))
            }

            contactDiv.appendChild(contactImage)
            contactDiv.appendChild(contactName)
            contactDiv.appendChild(eraseContactButton)
            agendaMainDiv.appendChild(contactDiv)
        })
    
    
        
        let agendaSearchDiv=document.getElementById("agendaSearchDiv")
        agendaSearchDiv.innerHTML=""
        let searchInput=document.createElement("input")
        searchInput.id="updateEmailInput"
        searchInput.type = "text";
        searchInput.placeholder = "Email";
    
        agendaSearchDiv.appendChild(searchInput)
    })


}
export {contactsUI}