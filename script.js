const inputScreen = document.querySelector(".input");
const finalResultScreen = document.querySelector(".main-result");
const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector('#delete')
const numbersBtn = document.querySelectorAll(".number");
const equalToBtn = document.querySelector('.equalto');
const operatorBtn = document.querySelectorAll(".operators");

//Adding events in NumberButton to display.
numbersBtn.forEach((number) => {
    number.addEventListener('click', appendNumber);
})
operatorBtn.forEach((operator) => {
    // operator.addEventListener('click', appendNumber);
    operator.addEventListener('click', () => storeFirstValue(operator.textContent));
    ;
})
// Variables to contain a number, operator, another number.
let firstNumber = '';
let currentOperator = null;
let secondNumber = '';

clearBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', remove);
equalToBtn.addEventListener('click', equalTo);

function clear() {
    inputScreen.textContent = '';
    finalResultScreen.textContent = '';
    firstNumber = '';
    secondNumber = '';
    currentOperator = null;
}
function remove() {
    inputScreen.textContent = inputScreen.textContent.toString().slice(0, -1);
}
// function that populates the display with numbers when clicked. 
function appendNumber(e) {
    let value = e.target.textContent
    inputScreen.textContent += value;
}
function resetScreen() {
    inputScreen.textContent = '';
}
function storeFirstValue(operatorSign) {
    if (currentOperator !== null ) {
        
        return equalTo();
    };
    firstNumber = inputScreen.textContent;
    currentOperator = operatorSign;
    finalResultScreen.textContent = `${firstNumber} ${currentOperator}`
    resetScreen();

}
function equalTo() {
    if (currentOperator === null) return;
    secondNumber = inputScreen.textContent
    result = operate(currentOperator, firstNumber, secondNumber);
    inputScreen.textContent = roundOf(result);
    finalResultScreen.textContent = roundOf(result);
    currentOperator = null;
}
function roundOf(number) {
    return Math.round(number * 1000) / 1000;
}

//function which calculates
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

//Function which takes operator and calls functions to operate 2 numbers.
function operate(operatorSign, a, b) {
    a = Number(a);
    b = Number(b);
    if (operatorSign == '+') {
        return add(a, b);
    } else if (operatorSign == '-') {
        return subtract(a, b);
    } else if (operatorSign == '÷') {
        return divide(a, b);
    } else if (operatorSign == '×') {
        return multiply(a, b);
    }
}