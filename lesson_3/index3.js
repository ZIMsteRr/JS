const action = prompt("Choose action (+, -, *, /)");

while (!isValidOperator(action)) {
    action = prompt("Invalid action! Choose action (+, -, *, /)");
}

const operandA = getOperand('a');
const operandB = getOperand('b');

while (isNaN(operandA) || isNaN(operandB)) {
    alert("Invalid operand! Please enter a valid number.");
    operandA = getOperand('a');
    operandB = getOperand('b');
} 

const res = calc(action, operandA, operandB);

showResult(action, operandA, operandB, res)

function getOperand (operandName) {
    return Number(prompt(`Enter first operand ${operandName}`));
}

function calc (action, a, b) {

    let res

    if (action === '+') {
        res = a + b
    }   else if (action === '-') {
        res = a - b
    }   else if (action === '*') {
        res = a * b
    }   else if (action === '/') {
        res = a / b
    }

    return res

}

function showResult (action, a, b, res) {
    alert(`${a} ${action} ${b} = ${res}`);
}

function isValidOperator (operator) {
    return operator === '+' || operator === '-' || operator === '*' || operator === '/';
}