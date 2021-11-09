//Importar las clases necesarias
import Libro from "./controladores/libro.js"
import Usuario from "./controladores/usuario.js"
import Bibliotecario from "./controladores/bibliotecario.js"
import Transaccion from "./controladores/transaccion.js"

class Biblioteca {
  constructor(nombre, direccion, codigoPostal, pais) {
    this.id = this.crearIdBiblioteca()
    this.nombre = nombre || ""
    this.direccion = direccion || ""
    this.codigoPostal = codigoPostal || ""
    this.pais = pais || ""
    this.usuarios = []
    this.libros = []
    this.bibliotecarios = []
    this.transacciones = []
  }

  /**
   * @version 0.0.1
   * Método que genera de forma aleatoria un id de la biblioteca con valor numérico de longitud 6
   *
   * @return {String}
   */
  crearIdBiblioteca() {
    this.id = Math.floor(Math.random() * (999999 - 111111 + 1) + 111111)
    return this.id
  }

  /**
   * @version 0.0.1
   * Método que añade un usuario a la biblioteca
   * 
   * @param {Usuario}
   * @return {usuario}
   */
  añadirUsuario(nombre, primerApellido, segundoApellido, fechaAlta, fechaBaja) {
    let usuario = new Usuario(nombre, primerApellido, segundoApellido, fechaAlta, fechaBaja)
    this.usuarios.push(
      usuario
    )
    return usuario
  }

  /**
   * @version 0.0.1
   * Método que añade un bibliotecario a la biblioteca
   * 
   * @param {Bibliotecario}
   * @return {bibliotecario}
   */
  añadirBibliotecario(nombre, primerApellido, segundoApellido, fechaAlta,fechaBaja) {
    let bibliotecario = new Bibliotecario(
      nombre,
      primerApellido,
      segundoApellido,
      fechaAlta,
      fechaBaja
    )

    this.bibliotecarios.push(bibliotecario)

    return bibliotecario
  }

  /**
   * @version 0.0.1
   * Método que añade un libro a la biblioteca
   * 
   * @param {Libro}
   * @return {libro}
   */
  añadirLibro(titulo, autor, editorial, fechaPrimeraEdicion, prestado, venta) {
    let libro = new Libro(
      titulo,
      autor,
      editorial,
      fechaPrimeraEdicion,
      prestado,
      venta
    )

    this.libros.push(libro)
    
    return libro
  }

  /**
   * @version 0.0.1
   * Método que añade una transacciones a la biblioteca
   * 
   * @param {Transaccion}
   * @return {transaccion}
   */
   añadirTransaccion(libro, bibliotecario, usuario, tipoPrestamo) {
    if (bibliotecario) {
      if (!libro.prestado) {
        if (usuario.librosPrestados.length < 5) {
          let transaccion = new Transaccion(
            bibliotecario.id,
            usuario.id,
            libro.id,
            tipoPrestamo
          )

          this.transacciones.push(transaccion)
          libro.prestado = true
          usuario.librosPrestados.push(libro)
          bibliotecario.arrayTransacciones.push(transaccion)

          return transaccion
        }
      }
    }
  }
  
  /**
   * @version 0.0.1
   * Método que lista los libros cuyos préstamos han expirado
   * 
   */
   listarLibrosPrestamoExpirado() {
    let idLibrosExpirados = []
    this.transacciones.forEach((transaccion) => {
      if (transaccion.fechaLimitePrestamo < new Date()) {
        idLibrosExpirados.push(transaccion.idLibro)
      }
    })

    console.log("#LIBROS EXPIRADOS#")
    this.libros.forEach((libro) => {
      if (idLibrosExpirados.includes(libro.id) && libro.prestado == true) {
        console.log("#################################")
        console.log(` ID : ${libro.id}        `)
        console.log(` Titulo: ${libro.titulo}`)
        console.log(` Autor : ${libro.autor}`)
        console.log(` Editorial : ${libro.editorial}`)
        console.log(` Fecha Primera Edicion: ${libro.fechaPrimeraEdicion}`)
        console.log(` Prestado: ${libro.prestado}`)
        console.log(` En Venta: ${libro.venta}`)
      }
    })
    console.log("#################################")
  }
  
  /**
   * @version 0.0.1
   * Método que lista los libros que han sido prestados
   * 
   */
  listarLibrosPrestados() {
    let totalLibrosPrestados = 0
    console.log("#LIBROS PRESTADOS#")
    this.libros.forEach((libro) => {
      if (libro.prestado) {
        totalLibrosPrestados += 1
        console.log("#################################")
        console.log(` ID : ${libro.id}        `)
        console.log(` Titulo: ${libro.titulo}`)
        console.log(` Autor : ${libro.autor}`)
        console.log(` Editorial : ${libro.editorial}`)
        console.log(` Fecha Primera Edicion: ${libro.fechaPrimeraEdicion}`)
        console.log(` Prestado: ${libro.prestado}`)
        console.log(` En Venta: ${libro.venta}`)
      }
    })
    console.log("#################################")
    console.log(`TOTAL LIBROS PRESTADOS: ${totalLibrosPrestados}`)
  }

  /**
   * @version 0.0.1
   * Método que notifica a los usuarios que tengan préstamos expirados
   * 
   */
  avisarUsuariosExpirados() {
    let avisos = 0
    this.usuarios.forEach((usuario) => {
      this.transacciones.forEach((transaccion) => {
        if (
          transaccion.idUsuario == usuario.id &&
          transaccion.fechaLimitePrestamo < new Date() &&
          usuario.librosPrestados.findIndex((libro)=>{ return libro.id == transaccion.idLibro }) != -1
        ){
          avisos+=1
          console.log(
            ` Usuario : ${usuario.id} ha sido avisado de prestamos expirados.`
          )
        }
      })
    })
    if(avisos === 0){
      console.log("Ningun usuario tiene libros con prestamo expirado")
    }
  }

  /**
   * @version 0.0.1
   * Método que lista los libros
   * 
   */
  listarLibros() {
    console.log("#LIBROS BIBLIOTECA#")
    this.libros.forEach((libro) => {
      console.log("#################################")
      console.log(` ID : ${libro.id}        `)
      console.log(` Titulo: ${libro.titulo}`)
      console.log(` Autor : ${libro.autor}`)
      console.log(` Editorial : ${libro.editorial}`)
      console.log(` Fecha Primera Edicion: ${libro.fechaPrimeraEdicion}`)
      console.log(` Prestado: ${libro.prestado}`)
      console.log(` En Venta: ${libro.venta}`)
    })
    console.log("#################################")
  }
}

//INTRODUCIR DATOS

let biblioteca = new Biblioteca(
  "Vilas", 
  "Rúa Ribadavia, 5", 
  "15007", 
  "España"
)
let usuario0 = biblioteca.añadirUsuario(
  "Cris", 
  "Suarez", 
  "Castro", 
  null, 
  null
)
biblioteca.añadirUsuario(
  "Alberto", 
  "Fuentes", 
  "Rodriguez", 
  null, 
  null
)
biblioteca.añadirUsuario(
  "Victor", 
  "Dominguez", 
  "Fraga", 
  null, 
  null
)
biblioteca.añadirUsuario(
  "Pedro", 
  "Mansilla", 
  "Castro", 
  null, 
  null
)
biblioteca.añadirUsuario(
  "Silvia", 
  "Areas", 
  "Baldomir", 
  null, 
  null
)
biblioteca.añadirUsuario(
  "Alejandro", 
  "Mato", 
  "Gagino", 
  null, 
  null
)
let libro0 = biblioteca.añadirLibro(
  "The White Tiger",
  "Aravind Adiga",
  "Alfaguara",
  "2013,01,01",
  null,
  false
)
let libro1 = biblioteca.añadirLibro(
  "The Danish Girl",
  "David Ebershoff",
  "Anagrama",
  "2001,01,01",
  null,
  false
)
let libro2 = biblioteca.añadirLibro(
  "Tokio Blues",
  "Haruki Murakami",
  "Alfaguara",
  "2013,01,01",
  null,
  false
)
let bibliotecario0 = biblioteca.añadirBibliotecario(
  "Roi",
  "Baldomir", 
  null, 
  null, 
  null
)
biblioteca.añadirBibliotecario(
  "Tamara", 
  "López", 
  null, 
  null, 
  null
)
biblioteca.añadirBibliotecario(
  "María", 
  "Vázquez", 
  null, 
  null, 
  null
)

biblioteca.añadirTransaccion(
  libro0,
  bibliotecario0,
  usuario0,
  "7"
)
biblioteca.añadirTransaccion(
  libro1,
  bibliotecario0,
  usuario0,
  "14"
)
biblioteca.añadirTransaccion(
  libro2,
  bibliotecario0,
  usuario0,
  "31"
)

biblioteca.listarLibros()
biblioteca.listarLibrosPrestados()
biblioteca.listarLibrosPrestamoExpirado()
biblioteca.avisarUsuariosExpirados()