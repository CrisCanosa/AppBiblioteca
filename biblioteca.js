//Importar las clases necesarias
//import { libro } from "./controladores/libro.js";
//import { transaccion } from "./controladores/transaccion.js";
import Libro from "./controladores/libro.js";
import Usuario from "./controladores/usuario.js";
// import libro from "./controladores/libro.js";
// import transaccion from "./controladores/transaccion.js"

class Biblioteca {

    constructor(nombre, direccion, codigoPostal, pais) {
        this.id = this.crearIdBiblioteca()
        this.nombre = nombre || ''
        this.direccion = direccion || ''
        this.codigoPostal = codigoPostal || ''
        this.pais = pais || ''
    }


    /**
    * @version 0.0.1
    * Método que genera de forma aleatoria un id de la biblioteca con valor numérico con longitud 6 
    * 
    * @return {string}
    */
    crearIdBiblioteca() {
        this.id = Math.floor(Math.random() * (999999 - 111111 + 1) + 111111)
        return this.id
    }

}
let biblioteca = new Biblioteca('Vilas', 'Rúa Ribadavia, 5', '15007', 'España')

//Creacion de usuarios

let usuario1 = new Usuario('Cris', 'Suarez', 'Castro', null, null)
let usuario2 = new Usuario('Alberto', 'Fuentes', 'Rodriguez', null, null)
let usuario3 = new Usuario('Victor', 'Dominguez', 'Fraga', null, null)
let usuario4 = new Usuario('Pedro', 'Mansilla', 'Castro', null, null)
let usuario5 = new Usuario('Silvia', 'Areas', 'Baldomir', null, null)
let usuario6 = new Usuario('Alejgrando', 'Mato', 'Gagino', null, null)

let arrayUsuarios = []

arrayUsuarios.push(usuario1,usuario2)
console.log(arrayUsuarios)
//Borrar el usuario1
usuario1.borrarUsuarios(arrayUsuarios)
console.log(arrayUsuarios)

//MODIFICAR USUARIOS
usuario2.modificarUsuarios('Yago', '', '', '', '')
console.log(usuario2)

// //Creacion de libros

// let libro1 = new Libro()
// let arrayLibros = []

// arrayLibros.push(libro1)