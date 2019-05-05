const AddPlace = document.querySelector("div#form");

let i;
let pastResponse = '';
function addRow(){
    //Getting example row to add another one
    let response = '';

    let dolly = document.getElementById("incomes").lastElementChild;

    //Clones it
    let clone = dolly.cloneNode(true);
    response = prompt("What section do you want to add the row to? \nKeep it blank to add a row to the last added section");
    
    if(response == ''){
        if(pastResponse == ''){
            document.getElementById('incomes').appendChild(clone);
        }
        else{
        document.getElementById(pastResponse).appendChild(clone);
        }
    }
    else if(response == null){
        return;
    }
    else{

            pastResponse = response;
        document.getElementById(response).appendChild(clone);
         
        }
        
    }
    

function addSection(){
    let idInput = prompt("Enter the name for your next section");
    
    if(idInput == ''){
        alert("Please do not leave the text-box blank");
        return;
    }
    else if(idInput == null){
        return;
    }
    let tableSelect = document.querySelectorAll("table");
    for(i = 0; i < tableSelect.length; i++){
        //Iterates through all table's ids to check for duplicates
    if(tableSelect[i].id == idInput){
        alert("That name is already taken, either pick a new name or add more rows to the existing section with that name");
        return;
    }
    else{
        
    }
    }
    let tble = document.createElement("TABLE");
    tble.setAttribute("id", idInput);
    tble.setAttribute("class", "table table-bordered");
    let tbody = document.createElement("TBODY");
    let thead = document.createElement("THEAD");
    let trow1 = document.createElement('TR');
    let trow2 = document.createElement('TR');
    let trow3 = document.createElement('TR');
    //Creating labels for DOM table
    let thTitle = document.createElement("TH");
    let title = document.createTextNode(idInput);
    let thIncomes = document.createElement("TH");
    let income = document.createTextNode("Incomes");
    let thExpenses = document.createElement("TH");
    let expenses = document.createTextNode("Expenses");
    
    //Creating TD's for inputs to go into
    let tdD = document.createElement("TD");
    let tdE = document.createElement("TD");
    let tdI = document.createElement("TD");
    //Creating inputs for DOM table
    let descrip = document.createElement('input')
    let expen = document.createElement('input');
    let incom = document.createElement('input');


    /////////////////////////////////////////////////////
    //Making an entire row of the budget table from DOM//
    /////////////////////////////////////////////////////
//Setting classes for td's
    tdD.setAttribute("class", "col-8");
    tdI.setAttribute("class", "col-2");
    tdE.setAttribute("class", "col-2");
//Setting classes for inputs
    descrip.setAttribute("class", "d-inline form-control form-control-sm");
    expen.setAttribute("class", "expenses d-inline form-control form-control-sm");
    incom.setAttribute("class", "incomes d-inline form-control form-control-sm");
//Making sure they have the right onkeyup values
    incom.setAttribute("onkeyup", "updateTotal()");
    descrip.setAttribute("onkeyup", "updateTotal()");
    expen.setAttribute("onkeyup", "updateTotal()");
//Change them all to text inputs
    incom.setAttribute("type", "text");
    descrip.setAttribute("type", "text");
    expen.setAttribute("type", "text");

//Adding inputs to TD'S
    tdD.appendChild(descrip);
    tdI.appendChild(incom);
    tdE.appendChild(expen);

//Finalizing row
trow1.innerHTML += tdD.outerHTML + tdI.outerHTML + tdE.outerHTML;
trow2.innerHTML += tdD.outerHTML + tdI.outerHTML + tdE.outerHTML;
trow3.innerHTML += tdD.outerHTML + tdI.outerHTML + tdE.outerHTML;

    tbody.appendChild(trow1);
    tbody.appendChild(trow2);
    tbody.appendChild(trow3);
    tble.appendChild(tbody);
    thTitle.appendChild(title);
    thIncomes.appendChild(income);
    thExpenses.appendChild(expenses);
    thead.innerHTML += thTitle.outerHTML + thIncomes.outerHTML + thExpenses.outerHTML;
    thead.setAttribute("class", "thead-light")

    tble.appendChild(thead);
    /*tble.appendChild(tr0);
    tble.appendChild(tr1);
    tble.appendChild(tr2);
    tble.appendChild(tr3);*/
    
    AddPlace.appendChild(tble);

    
  
    
    //let r = document.createTextNode;

}