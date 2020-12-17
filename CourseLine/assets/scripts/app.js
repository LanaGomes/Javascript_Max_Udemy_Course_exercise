const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

/*++defaultResult -> Trará o valor antes da alteração --> 0
defaultResult-- -> trará o valor depois da alteração --> 1*/

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;/*Toda ${} transforma automaticamente qualquer entrada em string*/
    outputResult (currentResult, calcDescription); //from vendor file
}

function writeToLog (
   operationIdentifier,
   prevResult,
   operationNumber,
   newResult
) {const logEntry = {
      operation: operationIdentifier,
      prevResult: prevResult,
      number: operationNumber,   
      result: newResult,
   }
       logEntries.push (logEntry);
       console.log(logEntries);
}

function addNumbers(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber /*+= é igual a currentResult = currentResult + enteredNumber*/ /*toda variavel "puxada" do HTML  terá o valor de string, é necessário converte-la*/;
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog ('ADD',initialResult,enteredNumber,currentResult);
}

 function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult -= enteredNumber /*toda variavel "puxada" do HTML  terá o valor de string, é necessário converte-la*/;
    createAndWriteOutput ('-', initialResult, enteredNumber);
    writeToLog ('SUBTRACT',initialResult,enteredNumber,currentResult);
 }
 
 function multiply () {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult *=  enteredNumber /*toda variavel "puxada" do HTML  terá o valor de string, é necessário converte-la*/;
    createAndWriteOutput ('*', initialResult, enteredNumber);
    writeToLog ('MULTIPLY',initialResult,enteredNumber,currentResult);
 }
 function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult /=  enteredNumber /*toda variavel "puxada" do HTML  terá o valor de string, é necessário converte-la*/;
    createAndWriteOutput ('/', initialResult, enteredNumber);
    writeToLog ('DIVIDE',initialResult,enteredNumber,currentResult);
 }
 
addBtn.addEventListener('click', addNumbers);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


