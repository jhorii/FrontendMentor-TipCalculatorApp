function updateTipPercent(element, amount) {
    let currentTipPercent;
    if (element.id == "custom-tip") {
        amount = amount / 100;
    }
    document.getElementById("tip-options").dataset.tipPercent = amount;
    let tipButtons = document.getElementsByClassName("tip-button");
    let selected = document.getElementsByClassName("selected");
    if (selected.length > 0) {
        selected[0].classList.remove("selected");
    }    
    if (element.id !== "custom-tip") {
        document.getElementById("custom-tip").value = "";
    }
    
    element.classList.add("selected");
    updateCalculation();
}

function updateCalculation(){
    let tipPerPerson = document.getElementById("tip-per-person");
    let tipTotal = document.getElementById("tip-total");
    let bill = document.getElementById("bill").value;
    let tipPercent = document.getElementById("tip-options").dataset.tipPercent;
    let people = document.getElementById("number-of-people").value;
    tipPerPerson.innerText = "$" + ((bill * tipPercent) / people).toFixed(2);
    tipTotal.innerText = "$" + (bill * tipPercent).toFixed(2);
}

function resetCalculation(){
    let bill = document.getElementById("bill").value = "";
    let tipPercent = document.getElementById("tip-options").dataset.tipPercent = "0";
    let people = document.getElementById("number-of-people").value = 1;
    updateCalculation();
}