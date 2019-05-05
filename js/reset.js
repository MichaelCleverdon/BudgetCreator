function reset(){
    let allInputs = document.querySelectorAll("input");
    for(i = 0; i < allInputs.length; i++){
        allInputs[i].value = '';
    }
    document.getElementById("total").value = 0.00;
}