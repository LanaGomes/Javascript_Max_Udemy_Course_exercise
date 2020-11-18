const defaultResult = 0;
let currentResult = defaultResult;

function addNumbers(){
    currentResult = currentResult + userInput.value;
    outputResult (currentResult, '');
 }

addBtn.addEventListener('click', addNumbers);

function theCall (mae, irmao, marido) {
    let calling = `I love my ${mae}, my brother ${irmao} is my 
    faithful squire and my husband ${marido} is the best`
    return calling
}

alert(theCall(Leonir,Gabriel,João));


 