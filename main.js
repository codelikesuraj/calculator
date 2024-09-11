const display = document.querySelector('#display');
const numButtons = document.querySelectorAll('.numButton');
const opButtons = document.querySelectorAll('.opButton');
const eqButton = document.querySelector('#eqButton');
const clearButton = document.querySelector('#clear');

let numOne;
let numTwo;
let operation;

const clear = () => {
    display.textContent = '';
    numOne = undefined;
    numTwo = undefined;
    operation = undefined;
}
const add = () => {
    return numOne + numTwo;
};
const subtract = () => {
    return numOne - numTwo;
};
const multiply = () => {
    return numOne * numTwo;
};
const divide = () => {
    return numOne / numTwo;
};
const performOperation = () => {
    if (operation !== undefined && numOne !== undefined && numTwo !== undefined) {
        let total;
        switch (operation) {
            case '/':
                total = divide();
                break;
            case 'x':
                total = multiply();
                break;
            case '+':
                total = add();
                break;
            case '-':
                total = subtract();
        }

        if (total !== undefined) {
            numOne = total;
            numTwo = undefined;
            display.textContent = total;
        }
    }
}
const debug = () => console.log(numOne, operation, numTwo);

clearButton.onclick = clear;
numButtons.forEach(button => button.onclick = () => {
    if (operation !== undefined) {
        if (numTwo === undefined) {
            display.textContent = '';
        }
        display.textContent += button.textContent;
        numTwo = Number(display.textContent);
    } else {
        display.textContent += button.textContent;
        numOne = Number(display.textContent);
    }

    debug();
});
eqButton.onclick = () => {
    performOperation();
}
opButtons.forEach(button => button.onclick = () => {
    performOperation();

    if (numOne !== undefined) {
        operation = button.textContent;
    }

    debug();
});