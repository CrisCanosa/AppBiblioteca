//Importar las clases necesarias
//import { libro } from "./controladores/libro.js";
//import { transaccion } from "./controladores/transaccion.js";
import Usuario from "./controladores/usuario.js";
// import libro from "./controladores/libro.js";
// import transaccion from "./controladores/transaccion.js"

class Biblioteca {

    constructor(nombre, direccion, codigoPostal, pais){
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


let usuario = new Usuario('Cris', 'Suarez', 'Castro', null, null)
let arrayUsuarios = []

arrayUsuarios.push(usuario)
console.log(arrayUsuarios)

usuario.borrarUsuarios(arrayUsuarios)
console.log(arrayUsuarios)

let bibliotecario = new Bibliotecario()