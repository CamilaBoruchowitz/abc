let administrador ={
    userAdmin: 'useradmin@gmail.com',
    passAdmin: '123456PPo',
}

console.log(administrador);

console.log(administrador.userAdmin);
console.log(administrador.passAdmin);

const loginAdmin = () =>{
    let userAdmin = 'useradmin@gmail.com';
    let passAdmin = '123456PPo';

    let userEmail = document.getElementById('emailLogin').value;
    let userPassword = document.getElementById('passwordLogin').value;

    console.log(userAdmin, passAdmin);
    console.log(userEmail, userPassword)

    if(userAdmin == userEmail && passAdmin == userPassword){
        alert('Bienvenido admin');
        window.location.href = '/clase9_listas/pages/formulario.html';
    }
    else{
        alert('User o password incorrectos')
        window.location.href = '/clase9_listas/pages/error.html';
    }

    console.log(userAdmin, passAdmin);
}
