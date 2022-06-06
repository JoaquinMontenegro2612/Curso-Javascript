function preparar(coctel) {
    if (coctel == "negroni") {
        localStorage.setItem("seccion", "seccionNegroni");
    }
    if (coctel == "boulebardier") {
        localStorage.setItem("seccion", "seccionBoulebardier");
    }
    if (coctel == "oldFashioned") {
        localStorage.setItem("seccion", "seccionOldFashioned");
    }
}
window.onload = function() {
    if (document.title != "Preparacion") return;
    var seccion = localStorage.getItem("seccion");
    document.getElementById(seccion).classList.remove("d-none");
    document.getElementById(seccion).classList.add("d-block");
};

function sumar(bebida) {
    let valorActual = Number(document.getElementById(bebida).value);
    valorActual = valorActual + 0.25;
    document.getElementById(bebida).value = valorActual;
}

function restar(bebida) {
    let valorActual = Number(document.getElementById(bebida).value);
    if (valorActual == 0) {
        return;
    }
    valorActual = valorActual - 0.25;
    document.getElementById(bebida).value = valorActual;
}

function mostrar_img() {
    document.getElementById('imgVaso').classList.remove("d-none");
    document.getElementById('imgVaso').classList.add("d-block");

}


































// let nombre = "Homero";
// let apellido = "Simpson";
// let edad = "39";
// document.write(nombre);
// document.write(apellido);
// document.write(edad);

// const ciudad1 = "Springfield";
// const ciudad2 = "Shelbyville";
// const ciudad3 = "Capital City";
// const ciudad4 = "Cypress Creek  ";
// const ciudad5 = "Ogdenville";

// document.write(ciudad1);
// document.write(ciudad2);
// document.write(ciudad3);
// document.write(ciudad4);
// document.write(ciudad5);

// // let persona = {
// //     nombre: ,
// //     calle: ,
// //     edad:
// // }

// function persona(nombre, edad, tel, dni) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.tel = tel;
//     this.dni = dni;
//     //metodo
//     this.saludar = function() { alert("Hola me llamo " + this.nombre); }

// }

// function ingresarDatos(mensaje) {
//     return prompt(mensaje)
// }
// let nombre1 = ingresarDatos("Por Favor:Ingresa un Nombre")
// let edad1 = ingresarDatos("Por Favor:Ingrese su edad")

// const persona2 = new persona("José", 34, "645316135", "5684894454")
// const persona3 = new persona("Maria", 26, "35163511", "656816511")

// console.log(persona2);
// console.log(persona3);
// //persona2.saludar()
// //persona3.saludar()

// let cadena = "Soy un String Chinga tu madre"

// console.log(cadena.toLowerCAse());
// console.log(cadena.toUpperCAse());
// console.log(cadena.length);

// function llenarAgenda(nombre, edad, tel, dni) {
//     constpersonaAgenda = new Persona(nombre, edad, tel, dni)
//     return personaAgenda;
// }

// console.log("nombre" in persona2);