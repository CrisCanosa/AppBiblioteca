class Usuario {
    constructor(nombre, primerApellido, segundoApellido, fechaAlta, fechaBaja) {
        this.id = this.crearIdUsuario()
        this.nombre = nombre || 'Sin nombre'
        this.primerApellido = primerApellido || 'Sin primerApellido'
        this.segundoApellido = segundoApellido || 'Sin segundoApellido'
        this.fechaAlta = fechaAlta || Date()
        this.fechaBaja = fechaBaja || 'Usuario Activo'

    }

    // //metodo que crea los usuarios ID
    // crearIdUsuario(arrayUsu) {
    //     let idAleatorio = Math.random()  //array de letras
    //     for (let i = 0; i < arrayUsu.length; i++) {
    //         while(idAleatorio === arrayUsu[i].id){
    //             this.crearIdUsuario(arrayUsu)
    //         }
    //         return idAleatorio
    //     }
    // }
    //método set
    setNombre(nuevoNombre) {
        this.nombre = nuevoNombre
    }
    setPrimerApellido(nuevoApellido) {
        this.primerApellido = nuevoApellido
    }
    setSegundoApellido(nuevo2Apellido) {
        this.segundoApellido = nuevo2Apellido
    }
    setfechaAlta(nuevaFA) {
        this.fechaAlta = nuevaFA
    }
    setfechaBaja(nuevaFB) {
        this.fechaBaja = nuevaFB
    }
    //metodo crear id de usuarios
    crearIdUsuario() {
        let letras = ['a', 'b', 'c', 'v', 'g', 'e', 'h', 'z', 'r'] //array de letras
        let numeros = [1, 3, 5, 7, 9, 0, 6, 4, 8] //array de números
        let usuarioID = '' //string vacio donde se van a generar los id
        for (let i = 0; i < 6; i++) { //definimos la i porque solo va a estar en el momento del bucle
            usuarioID = usuarioID + letras[Math.ceil(Math.random() * letras.length - 1)] //generamos las letras
            usuarioID = usuarioID + numeros[Math.ceil(Math.random() * numeros.length - 1)] //generamos los numeros
        }
        return usuarioID //devolvemos el usuario ID
    }
    //metodo que modifica los usuarios 
    modificarUsuarios(modificarNombre, modificarPrimerApellido, modificarSegundoApellido, modificarFA, modificarFB) {
        this.nombre = modificarNombre || this.nombre
        this.primerApellido = modificarPrimerApellido || this.primerApellido
        this.segundoApellido = modificarSegundoApellido || this.segundoApellido
        this.fechaAlta = modificarFA || this.fechaAlta
        this.fechaBaja = modificarFB || this.fechaBaja
    }
    //metodo que borra los usuarios ID
    borrarUsuarios() {
    }

}
//USUARIOS
let usuario = new Usuario('Cris', 'Canosa', 'Perez', null, null)
let usuario2 = new Usuario('Alberto', 'Fuentes', 'Rodriguez', null, null)
let usuari3 = new Usuario('Victor', 'Dominguez', 'Fraga', null, null)
let usuario4 = new Usuario('Pedro', 'Mansilla', 'Castro', null, null)
let usuario5 = new Usuario('Silvia', 'Areas', 'Baldomir', null, null)
let usuario6  = new Usuario('Alejgrando', 'Mato', 'Gagino', null, null)

//MODIFICAR USUARIOS
usuario.modificarUsuarios('','Martinez','Tarrio', '', '')
usuario2.modificarUsuarios('Yago', '', '', '', '')

console.log(usuario)
console.log(usuario2)

export default Usuario;
