//Importar las clases necesarias

import Libro from "./controladores/libro.js";
import Usuario from "./controladores/usuario.js";
import Bibliotecario from "./controladores/bibliotecario.js";
import Transaccion from "./controladores/transaccion.js";

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
   *
   */

  añadirUsuario(nombre, primerApellido, segundoApellido, fechaBaja, fechaAlta) {
    this.usuarios.push(
      new Usuario(nombre, primerApellido, segundoApellido, fechaAlta, fechaBaja)
    );
  }

  /**
   * @version 0.0.1
   * Método que añade un Bibliotecarios a la biblioteca, si el id del bibliotecario no existe.
   * @param {Bibliotecario}
   *
   */
  añadirBibliotecario(
    nombre,
    primerApellido,
    segundoApellido,
    fechaBaja,
    fechaAlta
  ) {
    this.bibliotecarios.push(
      new Bibliotecario(
        nombre,
        primerApellido,
        segundoApellido,
        fechaAlta,
        fechaBaja
      )
    );
  }

  /**
   * @version 0.0.1
   * Método que añade un Bibliotecarios a la biblioteca, si el id del bibliotecario no existe.
   * @param {Libro}
   *
   */
  añadirLibro(titulo, autor, editorial, fechaPrimeraEdicion, prestamo, venta) {
    this.libros.push(
      new Libro(titulo, autor, editorial, fechaPrimeraEdicion, false, venta)
    );
  }

  /**
   * @version 0.0.1
   * Método que añade un Transacciones a la biblioteca, si el id del bibliotecario no existe.
   * @param {Transaccion}
   * @return {boolean}
   */
  añadirTransaccion(libro, bibliotecario, usuario, tipoPrestamo) {
    if (!libro.prestamo) {
      if (bibliotecario.fechaBaja >= new Date()) {
        if (usuario.librosPrestados.length < 5) {
          let libroIndex = this.libros.findIndex(libro);
          let usuarioIndex = this.usuarios.findIndex(usuario);
          let bibliotecarioIndex = this.bibliotecarios.findIndex(bibliotecario);
          if (
            libroIndex != -1 &&
            usuarioIndex != -1 &&
            bibliotecarioIndex != -1
          ) {

            transaccion = new Transaccion(
              bibliotecario.id,
              usuario.id,
              libro.id,
              tipoPrestamo
            );

            this.transacciones.push(transaccion);
            this.libros[libroIndex].prestamo = true;
            this.usuarios[usuarioIndex].librosPrestados.push(libro);
            this.bibliotecarios[bibliotecarioIndex].arrayTransacciones.push(
              transaccion
            );
          }
        }
      }
    }
  }
  // Devolver los libros con el préstamo expirado
  listarLibrosPrestamoExpirado() {
    let idLibrosExpirados = [];
    this.transacciones.forEach((transaccion) => {
      if (transaccion.fechaExpirado > Date()) {
        idLibrosExpirados.push(transaccion.idLibro);
      }
    });
    this.libros.forEach((libro) => {
      if (idLibrosExpirados.includes(libro.id)) {
        console.log(libro);
      }
    });
  }

  listarLibros() {
    this.libros.forEach((libro) => {
      console.log(libro);
    });
  }
}

//PRUEBAS

let biblioteca = new Biblioteca("Vilas", "Rúa Ribadavia, 5", "15007", "España");

let usuario1 = new Usuario("Cris", "Suarez", "Castro", null, null);
let usuario2 = new Usuario("Alberto", "Fuentes", "Rodriguez", null, null);
let usuario3 = new Usuario("Victor", "Dominguez", "Fraga", null, null);
let usuario4 = new Usuario("Pedro", "Mansilla", "Castro", null, null);
let usuario5 = new Usuario("Silvia", "Areas", "Baldomir", null, null);
let usuario6 = new Usuario("Alejgrando", "Mato", "Gagino", null, null);

let libro1 = new Libro('The White Tiger', 'Aravind Adiga', 'Alfaguara', '2013,01,01', null, false)
let libro2 = new Libro('The Danish Girl', 'David Ebershoff', 'Anagrama', '2001,01,01', null, false)
let libro3 = new Libro('Tokio Blues', 'Haruki Murakami', 'Alfaguara', '2013,01,01', null, false)

let bibliotecario1 = new Bibliotecario("Roi", "Baldomir", null, null, null);
let bibliotecario2 = new Bibliotecario("Tamara", "López", null, null, null);
let bibliotecario3 = new Bibliotecario("María", "Vázquez", null, null, null);

let transaccion1 = new Transaccion(bibliotecario1.id,usuario1.id,libro1.id)
let transaccion2 = new Transaccion(bibliotecario2.id,usuario2.id,libro2.id)



biblioteca.añadirUsuario(usuario1)
biblioteca.añadirLibro()
biblioteca.listarLibros()
biblioteca.añadirTransaccion()
console.log(biblioteca)




usuario1.listarLibrosPrestados(arrayLibros,arrayUsuarios,arrayTransacciones)
console.log(listarLibrosPrestados)
biblioteca.añadirTransaccion(transaccion1, transaccion2)
console.log(biblioteca.transacciones)
