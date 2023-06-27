

//arreglos
let banana = 'banana';
let manzana = 'manzana';
let peras = 'peras';

// array - arreglo - vector  van entre estos []
//indice        0          1         2         3        4   (las posiciones de los elementos)
let frutas = ['mangos', 'bananas', 'manzanas', 'peras', 'ananá'];

//indice         0       1            2              3      4         5(juntos s/uno)        6         7
let persona = [ 'Pepe', 123456789, 'San Martín 200', 7, 26155899654, ['Juan', 'Mario'], 'Argentina', true];

//acceso al arreglo - todos los elementos
console.log(frutas);

console.log('=========================================');

console.log(persona);

console.log('=========================================');


//acceso al elemento por su indice
//muestro manzanas ej
// imprimo con el consollog despues pongo ejemplo frutas y la posicion de la fruta que quiero
console.log('El elemento del indice 2 es: ' + frutas [2]);
console.log('El elemento del indice 0 es: ' + frutas [0]);
console.log('El elemento del indice 1 es: ' + frutas [1]);
console.log('El elemento del indice 4 es: ' + frutas [4]);
console.log('El elemento del indice 3 es: ' + frutas [3]);

console.log('=========================================');

console.log(persona [5][1]);

console.log('=========================================');

//bucles son pequeñas estructuras repetitivas de código pero no funciones 

//for agarramos el que dice for loop
// 3 partes: inicio                   limite                         paso
/*for (     let index = 0   ;           index < array.length  ;      index++) {
    //codigo que quiero que repita siempre que sea true la condicion de arriba
    const element = array[index]; 
}*/

// i= index de emmet
for (let i = 0; i < 10; i++) {

    console.log('Estamos contando de 0 a 9: ' +i);
}

for (let i = 0; i < 100; i++) {

    console.log('Estamos contando de 0 a 9: ' + i);
}

console.log('=========================================');

//con el punto me da muchas cosas para el array
console.log(persona.length);

for(let i = 0; i < persona.length; i++){
    console.log('Los elementos de persona son: ${persona[i]} ');
    console.log('los elementos de persona son: ' + persona[i]);
}

console.log('=========================================');

// []
// introducir datos en un array
let alumnos = []
let data = prompt('introduce un/a alumno/a: ');

//funcion para guardar datos en un arreglo - push: introduce los datos en el array
if(!data){
    alert('No se introdujo ningún dato');
}
else{
    alumnos.push(data)
    alert('Ingresamos el aluimno ${data} al arreglo de alumnos' )
}

alumnos.push('Pepe');
alumnos.push(data);