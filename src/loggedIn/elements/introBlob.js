export function introBlob(title,text){
    let bodyIntro=document.getElementById("bodyIntro")
    const blobDiv=document.createElement("div")
    const blobTitle=document.createElement("h3")
    blobTitle.innerHTML=title
    const blobText=document.createElement("p")
    blobText.innerHTML=text
    blobDiv.appendChild(blobTitle)
    blobDiv.appendChild(blobText)


    bodyIntro.appendChild(blobDiv)
}