
console.log('Hola Funciones'); 

//funciones: son pequeños bloques de codigo que realizan una tarea determinada
//palabra reservada con la que comienza     nombre   parentesis y {{{{}}}}
// dentro de las { va a estar lo que quiero que haga}
/* la funcion dameNombre logs the string mi nombre es pepe to the console*/
// (): son espacios para los parametros argumentos info para q la funcion realice la tarea

function dameNombre() {
    console.log('Mi nombre es Pepe');
}

// dameNombre();
console.log('Mi nombre es Pepe');
console.log('Mi nombre es Pepe');
console.log('Mi nombre es Pepe');
console.log('Mi nombre es Pepe');
console.log('Mi nombre es Pepe');
console.log('Mi nombre es Pepe');

dameNombre();
dameNombre();
dameNombre();
dameNombre();
dameNombre();
dameNombre();

let numUno = 5;
let numDos = 10;

let resultado = numUno + numDos;

console.log(resultado); 

numUno = 1000;
numDos = 200;

resultado = numUno + numDos;
console.log(resultado);

//funciones con infos
// le estoy diciendo ter voy a enviar dos datos y quiero que los sumes
function sumar(numeroUno, numeroDos) {

    let suma = numeroUno + numeroDos;

    console.log(`El resultado de la suma es ${suma}`); //se usan estas comillas ``` 

    console.log('el resultado de la suma es: ' + suma);

    //dameNombre(); dentro dde una fc puedo poner otra
}

sumar(1500, 5000); 
sumar(numUno, numDos);

function resta(a, b) {
    let resultado = a - b;
    console.log(`El resultado de la resta es: ${resultado}`);

    sumar( a, b);
    multiplicar(a, b);
    
}
resta(numDos, numUno);

function multiplicar(x, y) {

    let resultado = x * y;
    console.log(`El resultado de la multiplicación es: ${resultado}`);
    
}

function miNombre(nombre) {
    console.log(`Mi nombre es: ${nombre}`);
    
}
miNombre('Pepe');

console.log('==============================')

//funciones flecha (se elimina la function y se crea la variable ej:const)
const miNombre = (nombre) => {
    console.log(`Mi nombre es: ${nombre}`);
}

const division = (nombre) =>{
    console.log('Hola soy una función' + nombre);
}
division('Flecha'); 
