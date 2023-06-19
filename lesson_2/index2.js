const operation = prompt("Choose your operation (+, -, *, /)");

let firstOperand = prompt("Enter first operand");
let secondOperand = prompt("Enter second operand");

let result;
let operationString;
switch (operation) {
  case "+":
    result = firstOperand + secondOperand;
    operationString = 'addition';
    break;
  case "-":
    result = firstOperand - secondOperand;
    operationString = 'subtraction';
    break;
  case "*":
    result = firstOperand * secondOperand;
    operationString = 'multiplication';
    break;
  case "/":
    result = firstOperand / secondOperand;
    operationString = 'division';
    break;
  default:
    alert("Wrong operation!");
}

alert(`${operationString} : ${firstOperand} ${operation} ${secondOperand} = ${result}`);