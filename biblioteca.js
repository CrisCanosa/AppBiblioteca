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

  añadirUsuario(nombre, primerApellido, segundoApellido, fechaAlta, fechaBaja) {
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
    fechaAlta,
    fechaBaja
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
      new Libro(titulo, autor, editorial, fechaPrimeraEdicion, prestamo, venta)
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
    this.libros.forEach((libro, index) => {
      console.log("Libro" + index, libro);
    });
  }
}

//PRUEBAS

let biblioteca = new Biblioteca("Vilas", "Rúa Ribadavia, 5", "15007", "España");

biblioteca.añadirUsuario("Cris", "Suarez", "Castro", null, null);
biblioteca.añadirUsuario("Alberto", "Fuentes", "Rodriguez", null, null);
biblioteca.añadirUsuario("Victor", "Dominguez", "Fraga", null, null);
biblioteca.añadirUsuario("Pedro", "Mansilla", "Castro", null, null);
biblioteca.añadirUsuario("Silvia", "Areas", "Baldomir", null, null);
biblioteca.añadirUsuario("Alejgrando", "Mato", "Gagino", null, null);

biblioteca.añadirLibro(
  "The White Tiger",
  "Aravind Adiga",
  "Alfaguara",
  "2013,01,01",
  null,
  false
);
biblioteca.añadirLibro(
  "The Danish Girl",
  "David Ebershoff",
  "Anagrama",
  "2001,01,01",
  null,
  false
);
biblioteca.añadirLibro(
  "Tokio Blues",
  "Haruki Murakami",
  "Alfaguara",
  "2013,01,01",
  null,
  false
);

biblioteca.añadirBibliotecario("Roi", "Baldomir", null, null, null);
biblioteca.añadirBibliotecario("Tamara", "López", null, null, null);
biblioteca.añadirBibliotecario("María", "Vázquez", null, null, null);

biblioteca.listarLibros();

biblioteca.añadirTransaccion(
  biblioteca.libros[0],
  biblioteca.bibliotecarios[0],
  biblioteca.usuarios[0]
);

console.log("BIBLIOTECA ====> \n", biblioteca);