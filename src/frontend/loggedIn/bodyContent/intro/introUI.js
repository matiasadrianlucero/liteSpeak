
export function introUI(){
    let bodyDiv=document.getElementById("bodyDiv")
    bodyDiv.innerHTML=""
    let bodyIntro=document.createElement("div")
    bodyIntro.id="bodyIntro"

    let bodyTitle=document.createElement("h1")
    bodyTitle.innerHTML="LS"

    let bodyDesc=document.createElement("p")
    bodyDesc.innerHTML="A lil' one to one social website."

    

    bodyIntro.appendChild(bodyTitle)
    bodyIntro.appendChild(bodyDesc)


    bodyDiv.appendChild(bodyIntro)
}