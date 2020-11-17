const defaultResult = 0;
let currentResult = defaultResult;
currentResult = (currentResult + 10) * 3 / 2 - 1;

function addNumbers(num1, num2){
    const result = num1 + num2;
    alert('The result is ' + result);
}

addNumbers(10,2);
addNumbers(5,5);

let calculationDescription = `( ${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult,calculationDescription);


 