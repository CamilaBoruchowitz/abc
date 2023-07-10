
console.log('Estamos en el JS de productos');

let memoriaLocal = localStorage.getItem('Nombre');

let misProductos = localStorage.getItem('Prodcutos');

console.log(misProductos)

console.log(memoriaLocal);

let titulo = document.getElementById('titulo');

titulo.innerHTML = memoriaLocal;

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
