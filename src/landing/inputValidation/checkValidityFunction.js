function checkValidityFunction(formArrays,submitButotns){
    let errors=0
    if(formArrays[0].value.endsWith('.com')){
        formArrays[0].setCustomValidity("");
    } else {
        formArrays[0].setCustomValidity("Email doesn't end with .com");
    }
    formArrays.map((map,index)=>{
        if(!map.checkValidity()||map==""){
            errors=+1
        }
    })

    if (errors>0){
        submitButotns.style.pointerEvents="none"
        submitButotns.style.opacity=".3"

    } else {
        submitButotns.style.pointerEvents="auto"
        submitButotns.style.opacity="1"


    }
}
export {checkValidityFunction}