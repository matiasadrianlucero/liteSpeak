function storeContacts(data){
    localStorage.setItem("contacts",data)
    console.log(localStorage.getItem("contacts"))
}   
export {storeContacts}