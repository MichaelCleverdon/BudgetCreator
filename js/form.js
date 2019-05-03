const expenses = document.querySelectorAll("input.expenses");
const incomes = document.querySelectorAll("input.incomes");
let total = 0;
let valueE;
let valueI;
function updateTotal(){
    total = 0;
    for(i = 0; i < expenses.length; i++){
        if(expenses[i].value == ''){
            valueE = 0;
            console.log(valueE);
        }
        else{
            valueE = parseInt(expenses[i].value);
            console.log(valueE);
        }
        total -= valueE;
    }
    for(i = 0; i < incomes.length; i++){
        if(incomes[i].value == ''){
            valueI = 0;
        }
        else{
            valueI = parseInt(incomes[i].value);
        }
        total += valueI;
    }
    //total = parseInt(total);
   // let roundedNum = total.toFixed(2);
   console.log(total);
   
   let roundedNum = total;
    document.getElementById("total").value = roundedNum;
}
function reset(){
    let allInputs = document.querySelectorAll("input");
    for(i = 0; i < allInputs.length; i++){
        allInputs[i].value = '';
    }
    document.getElementById("total").value = 0.00;
}