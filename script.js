
let a = undefined;
let b = undefined;
let opperand = "";
let firstValueDefined = false;

document.getElementById("display-value").innerText = "14";
// event listners
document.getElementById("ac-button").addEventListener("click", clearDisplay);
document.querySelector("#neg-pos").addEventListener("click", () => {makeNegOrPos(getDisplayValue())});
document.querySelector("#zero").addEventListener("click", () => {changeDisplayValue("zero")});
document.querySelector("#one").addEventListener("click", () => {changeDisplayValue("one")});
document.querySelector("#two").addEventListener("click", () => {changeDisplayValue("two")});
document.querySelector("#three").addEventListener("click", () => {changeDisplayValue("three")});
document.querySelector("#four").addEventListener("click", () => {changeDisplayValue("four")});
document.querySelector("#five").addEventListener("click", () => {changeDisplayValue("five")});
document.querySelector("#six").addEventListener("click", () => {changeDisplayValue("six")});
document.querySelector("#seven").addEventListener("click", () => {changeDisplayValue("seven")});
document.querySelector("#eight").addEventListener("click", () => {changeDisplayValue("eight")});
document.querySelector("#nine").addEventListener("click", () => {changeDisplayValue("nine")});
document.querySelector("#point").addEventListener("click", () => {changeDisplayValue("point")});
//***********

document.querySelector("#add").addEventListener("click", () => {
  if (a != undefined && opperand != ""){
    b = getDisplayValue();
    document.getElementById("display-value").innerText =
      operate(opperand,a,b);
    a = operate(opperand,a,b);
    opperand = "+";
    b = undefined;
  }
  else {
    a = getDisplayValue();
    opperand = "+"
  }
});

document.querySelector("#subtract").addEventListener("click",() => {
  if (a != undefined && opperand != ""){
    b = getDisplayValue();
    document.getElementById("display-value").innerText =
      operate(opperand,a,b);
    a = operate(opperand,a,b);
    opperand = "-";
    b = undefined;
  }
  else {
    a = getDisplayValue();
    opperand = "-";
  }

});

document.querySelector("#multiply").addEventListener("click",() => {
  if (a != undefined && opperand != ""){
    b = getDisplayValue();
    document.getElementById("display-value").innerText =
      operate(opperand,a,b);
    a = operate(opperand,a,b);
    opperand = "*";
    b = undefined;
  }
  else {
    a = getDisplayValue();
    opperand = "*";
  }

});

document.querySelector("#divide").addEventListener("click",() => {
  if (a != undefined && opperand != ""){
    b = getDisplayValue();
    document.getElementById("display-value").innerText =
      operate(opperand,a,b);
    a = operate(opperand,a,b);
    opperand = "/";
    b = undefined;
  }
  else {
    a = getDisplayValue();
    opperand = "/";
  }

});

document.querySelector("#equals").addEventListener("click", () => {
  b = getDisplayValue();
  if (a === undefined){
    document.getElementById("display-value").innerText = b;
    b = undefined;
  }
  else {
    document.getElementById("display-value").innerText = operate(opperand,a,b);
    a = getDisplayValue();
    b = undefined;
  }
});

/*

document.querySelector("#percent").addEventListener("click", );
*/
// button functions

function clearDisplay(){
  a = undefined;
  b = undefined;
  opperand = "";
  document.getElementById("display-value").innerText = "0";
}

function makeNegOrPos(value){
  if (document.getElementById('display-value').innerText == "0"){
    document.getElementById('display-value').innerText = "0";
  }
  else {
    document.getElementById('display-value').innerText =
      value * -1;
  }
}

function getDisplayValue(){
  return Number.parseFloat(document.getElementById('display-value').innerText)
}

function isFirstValueDefined(){
  if (a != undefined && opperand != ""){
    return true;
  }
  else {
    return false;
  }
}

// Main operation functions
function changeDisplayValue(buttonID){
  if (getDisplayValue().toString.length > 9){
    document.getElementById('display-value').innerText =
      getDisplayValue().toString.substring(0,9);
  }

  if (isFirstValueDefined() && b === undefined) {
    document.getElementById('display-value').innerText =
      document.getElementById(buttonID).innerText;
  }
  else if (getDisplayValue() === 0){
    document.getElementById('display-value').innerText =
      document.getElementById(buttonID).innerText;
  }
  else {
    document.getElementById('display-value').innerText =
      document.getElementById('display-value').innerText +
      document.getElementById(buttonID).innerText;
  }




}

function operate(operator, a, b){
  if (operator === "+"){
    return (a+b);
  }
  else if (operator === "-"){
    return (a-b);
  }
  else if (operator === "*"){
    return (a*b);
  }
  else if (operator === "/"){
    if (b == "0" || b == 0){
      return "Nope"
    }
    return (a/b);
  }
}
