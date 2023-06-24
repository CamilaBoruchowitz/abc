let user = prompt('Por favor ingrese su Usuario: ');
let pass = prompt('Ingrese su password: ');

console.log(user);
console.log(pass);

if( user == 'Pepe' && pass == 1234){
    alert('Bienvenido a su sistema');
    window.location.href = './pages/admin.html' //llevalo a la pagina admin si eso es verdadero
}
else {
    alert('Usuario o password incorrecto');
    location.href = '../pages/error.html'
}
