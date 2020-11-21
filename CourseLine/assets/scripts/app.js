const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;/*Toda ${} transforma automaticamente qualquer entrada em string*/
    outputResult (currentResult, calcDescription); //from vendor file
}

function addNumbers(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber /*toda variavel "puxada" do HTML  terá o valor de string, é necessário converte-la*/;
    createAndWriteOutput('+', initialResult, enteredNumber);
 }

 function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult = currentResult - enteredNumber /*toda variavel "puxada" do HTML  terá o valor de string, é necessário converte-la*/;
    createAndWriteOutput ('-', initialResult, enteredNumber);
 }
 
 function multiply () {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult = currentResult * enteredNumber /*toda variavel "puxada" do HTML  terá o valor de string, é necessário converte-la*/;
    createAndWriteOutput ('*', initialResult, enteredNumber);
 }
 function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult = currentResult / enteredNumber /*toda variavel "puxada" do HTML  terá o valor de string, é necessário converte-la*/;
    createAndWriteOutput ('/', initialResult, enteredNumber);
 }
 
addBtn.addEventListener('click', addNumbers);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


