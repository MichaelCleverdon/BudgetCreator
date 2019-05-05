const expenses = document.querySelectorAll("input.expenses");
const incomes = document.querySelectorAll("input.incomes");
let total = 0;
let valueE;
let valueI;
function updateTotal(){
    const expenses = document.querySelectorAll("input.expenses");
    const incomes = document.querySelectorAll("input.incomes");
    total = 0;
    for(i = 0; i < expenses.length; i++){
        if(expenses[i].value == ''){
            valueE = 0;
           // console.log("valueE: "+valueE);
        }
        else{
            //Changed from parseInt to parseFloat because of decimals being necessary in money
            valueE = parseFloat(expenses[i].value);
           // console.log("valueE: "+valueE);
        }
        total -= valueE;
    }
    for(i = 0; i < incomes.length; i++){
        if(incomes[i].value == ''){
            valueI = 0;
           // console.log("ValueI: "+valueI);
        }
        else{
            //Changed from parseInt to parseFloat because of decimals being necessary in money
            valueI = parseFloat(incomes[i].value);
           // console.log("ValueI: "+valueI);
        }
        total += valueI;
    }
    //total = parseInt(total);
   // let roundedNum = total.toFixed(2);
   //console.log(total);
   
   let roundedNum = total.toFixed(2);

    document.getElementById("total").value = roundedNum;
}
