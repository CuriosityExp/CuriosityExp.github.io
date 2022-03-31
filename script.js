const calcScreen = document.querySelector(".calculator-screen");
const operators = document.querySelectorAll(".opt");
const numbers = document.querySelectorAll(".num");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");
const decimal = document.querySelector(".dec");

const updateScreen = (number) => {
    calcScreen.value = number;
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) =>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
})

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
    if (currentNumber == "0") {
        currentNumber = number;
    }else {
        currentNumber += number;
    }   
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) =>{
        inputOperator(event.target.value);
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === ''){
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
}

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
})

const calculate = () => {
    let result = '';
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}   

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
})

const inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }else {
        currentNumber += dot;
    } 
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

