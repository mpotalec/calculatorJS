let num1 = 8;
let num2 = 5;

let sumEl = document.getElementById("sum-el");

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add(){
    let addNumber = num1 + num2;
    sumEl.innerHTML += addNumber //ovo ce ponavljat prosli rezultat + novi + novi + novi
}

function subtract(){
    let subtractNumber = num1 - num2;
    sumEl.textContent += subtractNumber
}

function divide(){
    let divideNumber = num1 / num2;
    sumEl.textContent = "Sum: " + divideNumber; // ovo samo prikaze novi rezultat i to je to
}

function multiply(){
    let multiplyNumber = num1 * num2;
}