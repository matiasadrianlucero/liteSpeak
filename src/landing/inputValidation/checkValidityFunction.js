function checkValidityFunction(formArrays,landingInputEmail,submitButotns){
    let errors=0
    formArrays.map((map,index)=>{
        if(!map.checkValidity()||map==""){
            errors=+1
        }
    })
    if(landingInputEmail.value==""){
        errors=+1
    }
    if (errors>0){
        submitButotns.style.pointerEvents="none"
        console.log(errors + "found")
    } else {
        submitButotns.style.pointerEvents="auto"
        console.log(errors+"not found")
    }
}
export {checkValidityFunction}