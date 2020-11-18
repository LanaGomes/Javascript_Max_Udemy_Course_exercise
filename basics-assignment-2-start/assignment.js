const task3Element = document.getElementById('task-3');

function emptyAlert () {
    alert ('Hello Universe!');
}

function nameAlert (name) {
    alert(name);
}

emptyAlert ();
nameAlert ('Lana');

task3Element.addEventListener('click', emptyAlert);

function theCall (mae, irmao, marido) {
    let calling = `I love my mom ${mae}, my brother ${irmao} is my 
      faithful squire and my husband ${marido} is the best`
      return calling
}

alert(theCall('Leonir', 'Gabriel','João'));
/*Neste caso é melhor reservar o resultado de uma 
função em uma variável antes de usá-la para evitar
o retrabalho caso seja necessário alterar estes
valores, segue o correto.:

const namesOfTheCalling = theCall ('maria', 'jose', 'Josenildo');
alert(namesOfThecalling);

*/