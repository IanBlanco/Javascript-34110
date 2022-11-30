alert("Antes de empezar, estos son los valores validos: \n Leo Messi 1010 \n Cristiano Ronaldo 7070 \n Sergio Aguero 9090 \n Andres Iniesta 8080")


const usuarios_validos = [
{user: "Leo Messi", pass: 1010},
{user: "Cristiano Ronaldo", pass: 7070},
{user: "Sergio Aguero", pass: 9090},
{user: "Andres Iniesta", pass: 8080}
];                                                        

let respuesta = confirm("Bienvenido/a! " + "\n" + "Inicie sesión para continuar." );

if (respuesta) {
    pedir_datos();
}


// Funciones 
function pedir_datos() {
    var nombre = prompt("Ingrese su nombre y apellido.");
    let contraseña = parseInt(prompt(nombre + " ingrese contraseña numérica."));
    console.log( "Ingresado: " + nombre + " " + contraseña)
    var test_user = usuarios_validos.find(elemento => elemento.user == nombre)
    console.log(test_user)
    var test_pass = usuarios_validos.find(elemento => elemento.pass == contraseña)
    console.log(test_pass)

    if (test_user && test_pass) {

        let validacion = validar_datos(test_user, test_pass);

        if (validacion) {
            alert("Bienvenido " + nombre)
        }

    } else {
        alert("Ingreso algun dato incorrecto, vuelva a intentarlo...")
    }
}

function validar_datos(test_user, test_pass) {
    if (test_user == test_pass) {
        alert("Los datos coinciden.")
        return true;
    }
}

