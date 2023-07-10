
console.log('Formulario de Carga de Productos');

let productos = [];

//       array      0       1
let frutas = ['peras', 'manzanas'];

//JSON: CON LLAVES los objetos son parecidos a los arrays xq acumulan datos voy a encontrar a traves de las prop del arreglo
// nombre, apellido, ciudad es propiedad
let persona = {
    nombre: 'Pepe', 
    apellido: 'Pérez',
    ciudad: 'CABA',
};

function cargarProductos() {

    //imprimimos una info de la funcion
    console.log('Tus prodcutos se cargaron a la database');
//con document podemos acceder a todo en este caso document quiero que me traigas elemento por el id


// va a tomar el del div id nombreProducto
//tomamos los datos mediante el formulario
    let nombreProducto = document.getElementById('nombreProducto').value;
    let precioProducto = document.getElementById('precioProducto').value;
    //value me deja tomar los datos

    console.log(typeof precioProducto);

    //Objetos JSON de productos
    //nombreprodcuto obtenemos desde el input html
    let producto = {
        nombre: nombreProducto,
        precio: precioProducto
    }

    //imprimimos el objeto producto
    console.log(productos);


    //utilizamos el localstorage

    //guardamos el prodcuto en el arreglo o database
    productos.push(producto);

    
    //guardamos la info en el array de productos
    /* COMENTO PARA VER LO DE OBJETOS productos.push(nombreProducto);
    productos.push(precioProducto);*/

    //imprimimos el array
    console.log(productos);

    localStorage.setItem('Nombre', 'Pepe');

    // localStorage.setItem('Productos', productos)- [objet-objet tira];
// 1 Creamos una variable para que podamos convertir los tados a json

    let misProductos = JSON.stringify(productos);

    //2 le pasamos la variable al locastorage

    localStorage.setItem('Productos', misProductos);


/*//imprimimos en la consola los datos del prodcuto
    //aca le pido que me imprima eso
COMENTO PARA VER LO DE OBJETOS console.log(nombreProducto);
    console.log(precioProducto);*/

    //llamo a la funcion cargar prodcutos
    cargarTabla();
    
}
/* lo comento porque lo pase a productos js*/
//funcion para cargar la tabla de prodcutos
const cargarTabla = () =>{

    //obtener la tabla
    let tabla = document.getElementById('tablaProductos');

    //recorrer el arreglo prodcutos
    for (let i =0; i < productos.length; i++) {

        //limpiar la tabla antes de q el for lo cargue de nuevo 
        tabla.innerText = ''; 


        //crear un elemento en este caso el tr
        let fila = document.createElement('tr');

        //creamos un elemento td
        let celdaNombre = document.createElement('td');

        let celdaPrecio = document.createElement('td');    

        //agregamos el dato a la celda del nombre del prodcuto
        celdaNombre.textContent = productos[i].nombre ;//aca datos del arreglo

        celdaPrecio.textContent = productos[i].precio;


        //subimos el td al tr

        fila.appendChild(celdaNombre);

        fila.appendChild(celdaPrecio);

        //suminos el tr al tbody
        tabla.appendChild(fila);



        console.log(prodcutos[i]);
        
    }
}
