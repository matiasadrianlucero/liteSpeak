export function displayDropdown(id){
    let element=document.getElementById(id)
    console.log(element)
    if(element.style.display!="none"){
        element.style.display="none"

    } else {
        element.style.display="flex"
        element.style.flexDirection="column"
    }
}