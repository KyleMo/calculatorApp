let a = null;
let b = null;
let c = null; // the final answer
let opperand = "";
let displayValueToUpdate = ""; // used in func setDisplayValue() & func whenValue(value)

document.getElementById("ac-button").addEventListener("click", clearDisplay);
document.querySelector("#neg-pos").addEventListener("click", () => {makeNegOrPos(getDisplayValue())});
document.querySelector("#zero").addEventListener("click", () => {changeDisplayValue("0")});
document.querySelector("#one").addEventListener("click", () => {changeDisplayValue("1")});
document.querySelector("#two").addEventListener("click", () => {changeDisplayValue("2")});
document.querySelector("#three").addEventListener("click", () => {changeDisplayValue("3")});
document.querySelector("#four").addEventListener("click", () => {changeDisplayValue("4")});
document.querySelector("#five").addEventListener("click", () => {changeDisplayValue("5")});
document.querySelector("#six").addEventListener("click", () => {changeDisplayValue("6")});
document.querySelector("#seven").addEventListener("click", () => {changeDisplayValue("7")});
document.querySelector("#eight").addEventListener("click", () => {changeDisplayValue("8")});
document.querySelector("#nine").addEventListener("click", () => {changeDisplayValue("9")});
document.querySelector("#point").addEventListener("click", () => {changeDisplayValue(".")});

//Opperands
document.querySelector("#add").addEventListener("click", () => {
  opperand = "+";
  setValue(getDisplayValue()) // set a value ((b is set when we click equal)
});
document.querySelector("#subtract").addEventListener("click",() => {
  opperand = "-";
  setValue(getDisplayValue()) // set a value ((b is set when we click equal)
});
document.querySelector("#multiply").addEventListener("click",() => {
  opperand = '*';
  setValue(getDisplayValue()) // set a value (b is set when we click equal)
});
document.querySelector("#divide").addEventListener("click",() => {
  opperand = '/';
  setValue(getDisplayValue()); // set a value ((b is set when we click equal)
});
document.querySelector("#percent").addEventListener("click",() => {
  a = getDisplayValue() / 100;
  b = null;
  displayValueToUpdate = "";
  changeDisplayValue(a.toString());
});

//equals
document.querySelector("#equals").addEventListener("click", () => {
  setValue(getDisplayValue());

  if(opperand === "+"){
    c = a + b;
    changeDisplayValue(c.toString());
  }
  else if (opperand === "-"){
    c = a - b;
    changeDisplayValue(c.toString());
  }
  else if (opperand === "*"){
    c = a * b;
    changeDisplayValue(c.toString());
  }
  else if (opperand === "/"){
    c = a / b;
    changeDisplayValue(c.toString());
  }

  //reset to continue operations
  a = c;
  b = null;
  opperand = "";
});

function changeDisplayValue(valueString) {

  displayValueToUpdate += valueString;
  document.getElementById("display-value").innerText = displayValueToUpdate;

  if(getDisplayValue().toString().length >= 7){
    document.getElementById('display-value').innerText =
      (Number.parseFloat(displayValueToUpdate).toExponential(3)).toString();
  }
}

function clearDisplay() {
  a = null;
  b = null;
  c = null;
  displayValueToUpdate = "";
  opperand = "";
  document.getElementById("display-value").innerText = "0";
}

// convertrs final value to string then adds to display
function makeNegOrPos(displayValue){
  document.getElementById('display-value').innerText = (displayValue * -1).toString();
}

// returns type Number
function getDisplayValue(){
  return Number.parseFloat(document.getElementById('display-value').innerText)
}

function setValue(value){
  if(a === null){
    a = value;
    //after a is defined, reset display value
    displayValueToUpdate = "";
  }

  else if( a != null && opperand != ""){
    b = value;
    //after b is defined, reset display value
    displayValueToUpdate = "";
  }
}
