function checkValidityFunction(formArrays,submitButotns){
    let errors=0
    formArrays.map((map,index)=>{
        if(!map.checkValidity()||map==""){
            errors=+1
        }
    })
    if (errors>0){
        submitButotns.style.pointerEvents="none"
    } else {
        submitButotns.style.pointerEvents="auto"
    }
}
export {checkValidityFunction}