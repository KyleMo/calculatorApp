
let a = 0;
let b = 0;
let opperand = "";

document.getElementById("display-value").innerText = "14";
// event listner
document.getElementById("ac-button").addEventListener("click", clearDisplay);
document.querySelector("#neg-pos").addEventListener("click", () => {makeNegOrPos(getDisplayValue())});
document.querySelector("#one").addEventListener("click", () => {changeDisplayValue("zero")});
document.querySelector("#one").addEventListener("click", () => {changeDisplayValue("one")});
document.querySelector("#two").addEventListener("click", () => {changeDisplayValue("two")});
document.querySelector("#three").addEventListener("click", () => {changeDisplayValue("three")});
document.querySelector("#four").addEventListener("click", () => {changeDisplayValue("four")});
document.querySelector("#five").addEventListener("click", () => {changeDisplayValue("five")});
document.querySelector("#six").addEventListener("click", () => {changeDisplayValue("six")});
document.querySelector("#seven").addEventListener("click", () => {changeDisplayValue("seven")});
document.querySelector("#eight").addEventListener("click", () => {changeDisplayValue("eight")});
document.querySelector("#nine").addEventListener("click", () => {changeDisplayValue("nine")});
document.querySelector("#add").addEventListener("click", () => {changeDisplayValue("nine")});
/*
document.querySelector("#subtract").addEventListener("click", );
document.querySelector("#multiply").addEventListener("click", );
document.querySelector("#divide").addEventListener("click", );
document.querySelector("#percent").addEventListener("click", );
*/
// button functions

function clearDisplay(){
  a = 0;
  b = 0;
  opperand = "";
  document.getElementById("display-value").innerText = "0";
}

function makeNegOrPos(value){
  if (document.getElementById('display-value').innerText == "0"){
    console.log("made it here");
    document.getElementById('display-value').innerText = "0";
  }
  else {
    document.getElementById('display-value').innerText =
      value * -1;
  }
}


function getDisplayValue(){
  return document.getElementById('display-value').innerText
}



// Main operation functions
function changeDisplayValue(buttonID){
  if (getDisplayValue() === "0"){
    document.getElementById('display-value').innerText = document.getElementById(buttonID).innerText;
  }
  else {
    document.getElementById('display-value').innerText =
      document.getElementById('display-value').innerText +
      document.getElementById(buttonID).innerText;
  }
}

function operate(operator, a, b){
  if (operate === "+"){
    return add(a,b);
  }
  else if (operate === "-"){
    return subtract(a,b);
  }
  else if (operate === "*"){
    return multiply(a,b);
  }
  else if (operate === "/"){
    return divide(a,b);
  }
}

function add (a,b){
  return a+b;
}

function subtract (a,b){
  return a-b;
}
function multiply (a,b){
  return a*b;
}
function divide (a,b){
  return a/b;
}
