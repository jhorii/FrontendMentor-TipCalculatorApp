let calculations = {
    bill: 0,
    tip: 0,
    people: 1
};

function updateBill(amount) {
    calculations.bill = amount;
    updateCalculation();
}

function updateTipPercent(element, amount) {
    calculations.tip = amount; 

    let selected = document.getElementsByClassName("selected");
    if (selected.length > 0) {
        selected[0].classList.remove("selected");
    }    
    element.classList.add("selected");

    if (element.id !== "custom-tip") {
        document.getElementById("custom-tip").value = "";
    }
   
    updateCalculation();
}

function updatePeople(amount){
    calculations.people = amount;
    updateCalculation();
}

function updateCalculation(){
    let tipPerPerson = document.getElementById("tip-per-person");
    let tipTotal = document.getElementById("tip-total");
    tipPerPerson.innerText = "$" + ((calculations.bill * calculations.tip) / calculations.people).toFixed(2);
    tipTotal.innerText = "$" + (calculations.bill * (1 + calculations.tip) / calculations.people).toFixed(2);
    
}

function resetCalculation(){
    let bill = document.getElementById("bill").value = "";
    let tipPercent = document.getElementById("tip-options").dataset.tipPercent = "0";
    let people = document.getElementById("number-of-people").value = 1;

    let selected = document.getElementsByClassName("selected");
    if (selected.length > 0) {
        selected[0].classList.remove("selected");
    }    
    
    calculations.bill = 0;
    calculations.tip = 0;
    calculations.people = 1;
    updateCalculation();
}