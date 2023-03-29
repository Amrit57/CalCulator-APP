// accesing html  Elements 
const userInputScreen = document.querySelector('.input');
const finalResultScreen = document.querySelector('.main-result');
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operators");
const equalbtn = document.querySelector(".evaluate");
const clearbtn = document.querySelector("#clear");
const deletebtn = document.querySelector("#delete");

//creating variables 
let currentScreenValue = '';
let finalScreenValue = '';
let operands = null;

//event to show numbers in screen
numbers.forEach((number) => {
    number.onclick = appendNumber;
})
//event to show operator sign in screen
operators.forEach((operator) => {
    operator.onclick = appendNumber;
    operator.onclick = operate;
})
//event to clear screem amd remove a digit.
clearbtn.addEventListener('click', clear);
deletebtn.addEventListener('click', remove);

//function that appends the text to show in screen.
function appendNumber(e) {
    let value = e.target.textContent;
    userInputScreen.textContent += value;
}

//function that clears the screen
function clear() {
    userInputScreen.textContent = '0';
    finalResultScreen.textContent = '';
}
//function that removes the last digit from screen.
function remove() {
    userInputScreen.textContent = userInputScreen.textContent.toString().slice(0, -1);

}

//function that equals and returns the total value.
function equal () {}



//function that runs the calculation.
function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case "+": add(a, b);
            break;
        case "-": subtract(a, b);
            break;
        case "×": multiply(a, b)
            break;
        case "÷": divide(a, b);
            break;
        default: null;
            break;
    }
}

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}