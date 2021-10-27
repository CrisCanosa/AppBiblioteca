import { libro } from "./libro.js";

class Usuario {
    constructor(nombre, primer_apellido, segundo_apellido, fecha_alta, fecha_baja) {
        this.id = this.crearIdUsuario()
        this.nombre = nombre
        this.primer_apellido = primer_apellido
        this.segundo_apellido = segundo_apellido
        this.fecha_alta = fecha_alta
        this.fecha_baja = fecha_baja
        
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
    crearIdUsuario() {
        let letras = ['a', 'b', 'c', 'v', 'g', 'e', 'h', 'z', 'r'] //array de letras
        let numeros = [1, 3, 5, 7, 9, 0, 6, 4, 8] //array de números
        let usuarioID = '' //string vacio donde se van a generar los id
        for (let i = 0; i < 6; i++) { //definimos la i porque solo va a estar en el momento del bucle
            usuarioID = usuarioID + letras[Math.ceil(Math.random() * letras.length - 1)] //generamos las letras
            usuarioID = usuarioID + numeros[Math.ceil(Math.random() * numeros.length - 1)] //generamos los numeros
        }
        return usuarioID //devolvemos la contrasenha

    }

    //metodo que modifica los usuarios ID
    modificarUsuarioId(modificarId) {
        if (typeof modificarId != 'string') { //comprobamos que sea un string
            console.log('El nuevo id tiene que ser un string.')
        } else if (modificarId.length <= 6) { //si no tiene 6 caracteres nos devuelve este mensaje
            console.log('El nuevo id de usuario tiene que ser de más de 6 caracteres.')
        } else {
            this.id = modificarId //le decimos que la contraseña  ahora va a ser nuevaContrasenha
        }
    }
    //metodo que borra los usuarios ID
    // borrarUsuariosId() {
    //     const id = this.id
    //     ids = 
    // }
    //metodo que calculo los libros prestados y también los que están vencidos
    libros_prestados() {
        let total = 0


    }
}

let usuario = new Usuario('Cris',null,null,null)
console.log(usuario.id)


//export default Usuario;

