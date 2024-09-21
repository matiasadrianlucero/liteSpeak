export function createBall(){
    let stylingContainer=document.getElementById("stylingContainer")

    let randomColor= Math.ceil(Math.random() * (2 - 0) + 0);

    const startingPositionVertical=  Math.ceil(Math.random() * (30 - (-10)) + (-10))
    const startingPositionHorizontal=  Math.ceil(Math.random() * (150 - (-10)) + (-10))
    const randomHeight = Math.ceil(Math.random() * (15 - 15) + 15);
    const randomWidth=  Math.ceil(Math.random() * (15 - 15) + 15);

    let ballElement=document.createElement("div")
    ballElement.id="ballElement"

    ballElement.style.left=startingPositionHorizontal +"vh"
    ballElement.style.top=startingPositionVertical +"vw"
    
     ballElement.style.backgroundColor="#84828F"
    // let randomHeight
    // let randomWidth
    switch(randomColor){
        case 1:
            ballElement.style.backgroundColor="#84828F"
        break
        case 2:
            ballElement.style.backgroundColor="#05050A"
        break
    }
     randomColor= Math.ceil(Math.random() * (3 - 0) + 0);
     switch(randomColor){
        case 1:
            ballElement.classList.add("moveBalls")
        break
        case 2:
            ballElement.classList.add("moveBallsBackwards")
        break
        case 3:
            ballElement.classList.add("moveBallsVertical")
        break
    }
    ballElement.style.width=randomHeight +"vw"
    ballElement.style.height=randomWidth + "vw"


    stylingContainer.appendChild(ballElement)
}