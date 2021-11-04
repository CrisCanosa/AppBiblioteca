import { transaccion } from "./transaccion.js";
import { Usuario } from "./usuario.js";

class Bibliotecario{
    constructor(id, nombre, primerApellido, segundoApellido, fechaAlta, fechaBaja){
        this.id=id || this.crearIdBibliotecario()
        this.nombre=nombre || "nombre"
        this.primerApellido=primerApellido || "apellido1"
        this.segundoApellido=segundoApellido || "apellido2"
        this.fechaAlta=fechaAlta || new Date(2021,1,1)
        this.fechaBaja=fechaBaja || new Date(2021,1,2)
    }
    
    crearIdBibliotecario() {
        let letras = ['a', 'b', 'c', 'v', 'g', 'e', 'h', 'z', 'r'] //array de letras
        let numeros = [1, 3, 5, 7, 9, 0, 6, 4, 8] //array de números
        let bibliotecarioID = '' //string vacio donde se van a generar los id
        for (let i = 0; i < 6; i++) { //definimos la i porque solo va a estar en el momento del bucle
            bibliotecarioID = bibliotecarioID + letras[Math.ceil(Math.random() * letras.length - 1)] //generamos las letras
            bibliotecarioID = bibliotecarioID + numeros[Math.ceil(Math.random() * numeros.length - 1)] //generamos los numeros
        }
        return bibliotecarioID //devolvemos la contrasenha

    }

    //Método para conocer las transacciones que ya se han ejecutado
    transaccionesEjecutadas(){
        return console.log()
    }

}

let arrayBibliotecarios= []
let bibliotecario1=new Bibliotecario('Roi', 'Baldomir')
let bibliotecario2=new Bibliotecario('Tamara', 'López')
let bibliotecario3=new Bibliotecario('María', 'Vázquez')
console.log(bibliotecario1)
console.log(bibliotecario2)
console.log(bibliotecario3)

arrayBibliotecarios.push(bibliotecario1,bibliotecario2,bibliotecario3)
console.log(arrayBibliotecarios)