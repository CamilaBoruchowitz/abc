console.log('3. Estoy en el archivo externo');

/*comentarios 
múltiples
*/


// (lo probamos ahora no usamos) console.log('Esto es un comentario de una línea')

//Palabras reservadas: dar indicaciones de tareas o funciones al lenguaje de programación
/*var
let
for 
function 
if 
*/

/* Casa
casa
CAsa
caSA
CASA
*/
//variables. esacio de memoria para guardar datos
//declaracion de una variable
var nmombre; 

 //asignación de una variable
nombre = "Pepe";

console.log(nombre);

var apellido = 'Pérez'

console.log(apellido);

//declaramos otra variable
provincia = 'Mendoza';

console.log(provincia);

//concatenar datos , uno info
console.log('Mi nombre es: ' + nombre + '. y mi apellido es: ' + apellido + '. Vivo en ' + provincia);

console.log(`Mi nombre es ${nombre} y mi apellido es ${apellido} y vivo en ${provincia}`);
//lo llama variable con strings

let pais = 'Argentina'; //con let puedo declarar solo una vez

var apellido = 'Gómez';

console.log('Mi nombre es: ' + nombre + ' y mi apellido es: ' + apellido + " y vivo en la provincia de " + provincia);

//let pais = 'Brasil';

pais = 'Uruguay';
pais= '1500';
dos = 2000

resultado = pais + dos

console.log(resultado);

//constante: no cambia
const dni = 123456789;

console.log(dni);

console.log('=========================================');

//operadores matemáticos básicos: + - * / % 
let numUno = 1000;
let numDos = 5000;

resultado = numUno + numDos;
console.log(`El resultado del primer número,1000, más el segundo, 5000 número es igual a:  ${resultado}`);

resultado = numDos - numUno;
console.log(` El resultado de 5000 menos 1000 es: ${resultado}`);

resultado = numDos / numUno;
console.log(` El resultado de 5000 dividido 1000 es igual a: ${resultado}`);

resultado = numDos % numUno; //módulo es el resto
console.log(` El módulo, resto, de 5000 % 1000 es: ${resultado}`);

//booleanos
let verdadero = true;
let falso = false;

//operadores relacionales: =, <,>, distinto, !---
let edad = 18;

//condicionales: if
/*if(condition = verdadera para que se ejecute el código){

}*/
if(edad < 18){
    console.log('1. No puedes comprar bebidas alchólicas');
}
if(edad >18){
    console.log('2. Puedes comprar bebidas');
}
if(edad >= 18){
    console.log('3. Puedes comprar bebidas');
}
if(edad <= 18){
    console.log('4. No puedes comprar bebidas');
}
if(edad == 18){
    console.log('5.Tenés 18 años');
}
if(edad === 18){
    console.log('6. Son estrictamente iguales');
}
// mayor o igual a 18 pero tengo que poner el >=que va junto
//if(edad.. 18){console.log('Puedes comprar bebidas')}

console.log('=========================================');
console.log('=========================================');

let password = 123456789;
if(password=123456789){
    console.log('Podés tener acceso a tu cuenta bancaria')
}
