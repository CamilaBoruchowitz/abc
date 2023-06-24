/*  >[]
1) _Recorrer el siguiente array de strings y contabilizar la cantidad de veces que aparece el string 'hola'
const palabras = ['pepe' , 'buen dia', 'hola', 'soy juan', 'hola']

-Se debe decir por alerta al final, "la lista de palabras contiene 2 veces el string 'hola'.
*/
//const no se modifica pero si se puede lo de adentro cuando es un array solamente
const palabras = ['pepe', 'buen dia', 'hola', 'soy juan' , 'hola']; 

let contadorHola = 0
//usamos condicional pero sin else el palabras.length quiere decir el largo del array en este caso 4
for(let i = 0; i < palabras.length; i = i + 1){
    //aca el i es el número de la posicion de la palabra dentro del array
    if(palabras[i] == 'hola'){
        contadorHola = contadorHola + 1
    }
}

alert('La lista de palabras contiene ' + contadorHola + ' veces el string hola')



console.log('=========================================');
/*
2) Recorrer el array de notas y sacar el promedio
const notas = [8,9,4]

-Se debera decir por alerta al final, 'El promedio final es: {promedio}'
*/

const notas = [8, 9, 4]
let total= 0

//el i++ es igual a i=i +1
for(let i = 0; i < notas.length; i++){
    total += notas[i]; 
    //aca para que me deje sumar tengo que poner += esta bien?
} 
let promedio = total / notas.length
alert(promedio);



console.log('=========================================');
/*
3)Recorrer el array de mensajes y contabilizar la cantidad de caracteres de todos los mensajes
const mensajes = ['hola a todos', 'buenas', 'me gusta JS']

- si la cantidad total es menor a 20, se dira 'el usuario recien empieza'
- si la cantidad total es entre 20 y 50 se dira 'el usuario es nuevo'
- si la cantidad total es mayor a 50, se dira 'el usuario es recurrente'
*/

const mensajes = ['hola a todos', 'buenas', 'me gusta JS']
let caracteres = 0


for(let i= 0; i < mensajes.length; i++){
    // suma que es igual 0 mas los mensajes dentro y con length le digo que cuente las letras el largo de cada una
    caracteres += mensajes[i].length
}
if (caracteres <20){
    alert('el usuario recien empieza')
}
// && YYYYYY quiere decir
else if(caracteres<50 && caracteres >20){
    alert('el usuario es nuevo')
}
else{
    alert('el usuario es recurrente')
}