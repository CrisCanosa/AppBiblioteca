//Importar las clases necesarias

import { Libro, Usuario, Transaccion, Bibliotecario } from "./controladores/*";

class Biblioteca {
  constructor(nombre, direccion, codigoPostal, pais) {
    this.id = this.crearIdBiblioteca();
    this.nombre = nombre || "";
    this.direccion = direccion || "";
    this.codigoPostal = codigoPostal || "";
    this.pais = pais || "";
    this.usuarios = [];
    this.libros = [];
    this.bibliotecarios = [];
    this.transacciones = [];
  }

  /**
   * @version 0.0.1
   * Método que genera de forma aleatoria un id de la biblioteca con valor numérico con longitud 6
   *
   * @return {string}
   */
  crearIdBiblioteca() {
    this.id = Math.floor(Math.random() * (999999 - 111111 + 1) + 111111);
    return this.id;
  }

  /**
   * @version 0.0.1
   * Método que añade un Usuario a la biblioteca, si el id del usuario no existe.
   * @param {Usuario}
   * @return {boolean}
   */

  añadirUsuario(usuario) {
    if (
      this.usuarios.filter((usr) => {
        return usr.id == usuario.id;
      }).length == 0
    ) {
      this.usuarios.push(usuario);
      return true;
    }
    return false;
  }

  /**
   * @version 0.0.1
   * Método que añade un Bibliotecarios a la biblioteca, si el id del bibliotecario no existe.
   * @param {Bibliotecario}
   * @return {boolean}
   */
  añadirBibliotecario(bibliotecario) {
    if (
      this.biblitotecarios.filter((bltc) => {
        return bltc.id == bibliotecario.id;
      }).length == 0
    ) {
      this.bibliotecarios.push(bibliotecario);
      return true;
    }
    return false;
  }

   /**
   * @version 0.0.1
   * Método que añade un Bibliotecarios a la biblioteca, si el id del bibliotecario no existe.
   * @param {Libro}
   * @return {boolean}
   */
  añadirLibro(libro) {
    if (
      this.libros.filter((lbr) => {
        return lbr.id == libro.id;
      }).length == 0
    ) {
      this.libros.push(libro);
      return true;
    }
    return false;
  }

  /**
   * @version 0.0.1
   * Método que añade un Bibliotecarios a la biblioteca, si el id del bibliotecario no existe.
   * @param {Transaccion}
   * @return {boolean}
   */
   añadirTransaccion(transaccion) {
    if (
      this.transacciones.filter((trnsccn) => {
        return trnsccn.id == transaccion.id;
      }).length == 0
    ) {
      this.libros.push(transaccion);
      return true;
    }
    return false;
  }
  // Devolver los libros con el préstamo expirado
  devolverLibrosPrestamoExpirado(transaccion) {
    if (
      this.transacciones.reduce((trnsccn) => {
        return this.trnsccn.fechaPrestamoExpirado  == true;
      }).length == 0
    ) {
      this.libros.push(transaccion);
      return true;
    }
    return false;
  }
}

let biblioteca = new Biblioteca("Vilas", "Rúa Ribadavia, 5", "15007", "España");
console.log(biblioteca);

//Creacion de usuarios

let usuario1 = new Usuario("Cris", "Suarez", "Castro", null, null);
let usuario2 = new Usuario("Alberto", "Fuentes", "Rodriguez", null, null);
let usuario3 = new Usuario("Victor", "Dominguez", "Fraga", null, null);
let usuario4 = new Usuario("Pedro", "Mansilla", "Castro", null, null);
let usuario5 = new Usuario("Silvia", "Areas", "Baldomir", null, null);
let usuario6 = new Usuario("Alejgrando", "Mato", "Gagino", null, null);

let arrayUsuarios = [];

arrayUsuarios.push(usuario1, usuario2);
console.log(arrayUsuarios);

//Borrar el usuario1
usuario1.borrarUsuarios(arrayUsuarios);
console.log(arrayUsuarios);

//MODIFICAR USUARIOS
usuario2.modificarUsuarios("Yago", "", "", "", "");
console.log(usuario2);

//Creacion de libros


let libro1 = new Libro('The White Tiger', 'Aravind Adiga', 'Alfaguara', '2013,01,01', null, false)
let libro2 = new Libro('The Danish Girl', 'David Ebershoff', 'Anagrama', '2001,01,01', null, false)
let libro3 = new Libro('Tokio Blues', 'Haruki Murakami', 'Alfaguara', '2013,01,01', null, false)

let arrayLibros = []
arrayLibros.push(libro1,libro2,libro3)

console.log(arrayLibros)




//Creacion de los bibliotecarios
let bibliotecario1 = new Bibliotecario("Roi", "Baldomir", null, null, null);
let bibliotecario2 = new Bibliotecario("Tamara", "López", null, null, null);
let bibliotecario3 = new Bibliotecario("María", "Vázquez", null, null, null);

let arrayBibliotecarios = [];
arrayBibliotecarios.push(bibliotecario1, bibliotecario2, bibliotecario3);
console.log(arrayBibliotecarios);

//Borrar el bibliotecario1
bibliotecario1.borrarBibliotecarios(arrayBibliotecarios);
console.log(arrayBibliotecarios);

//MODIFICAR USUARIOS
bibliotecario2.modificaBibliotecarios("Yago", "", "", "", "");
console.log(bibliotecario2);
