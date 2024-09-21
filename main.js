const display = document.querySelector('#display');
const numButtons = document.querySelectorAll('.numButton');
const opButtons = document.querySelectorAll('.opButton');
const clearButton = document.querySelector('#clear');

let numOne;
let numTwo;
let operation;

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
const operate = () => {
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

        total = total.toFixed(1);

        if (total !== undefined) {
            numOne = total;
            numTwo = undefined;
            display.textContent = total;
            display.scrollLeft = display.scrollWidth;
        }
    }
}

clearButton.onclick = () => {
    display.textContent = '';
    numOne = undefined;
    numTwo = undefined;
    operation = undefined;
};
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
    display.scrollLeft = display.scrollWidth;
});
opButtons.forEach(button => button.onclick = () => {
    operate();

    if (numOne !== undefined && button.textContent !== '=') {
        operation = button.textContent;
    }
});