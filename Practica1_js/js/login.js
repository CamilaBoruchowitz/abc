let correo = prompt('Por favor ingrese su correo: ');
let password = prompt('Ingrese su password: ');

console.log(correo);
console.log(password);

if( correo == 'camilab@gmail.com' && password == 9874){
    alert('Bienvenido a su cuenta');
    window.location.href = '/Practica1_js/pages/admin.html'
}
else {
    alert('Usuario o password incorrecto');
    location.href = '/Practica1_js/pages/error.html'
}