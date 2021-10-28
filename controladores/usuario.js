class Usuario {
    constructor(id,nombre, primer_apellido, segundo_apellido, fecha_alta, fecha_baja) {
        this.id = this.crearIdUsuario()
        this.nombre = nombre || 'Cris'
        this.primerApellido = primer_apellido || 'Canosa'
        this.segundoApellido = segundo_apellido || 'Perez'
        this.fecha_alta = fecha_alta || Date()
        this.fecha_baja = fecha_baja || '29/10/2021'
        this.arrayUsuarios= []
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

    //metodo que modifica los usuarios 
    modificarUsuarios(modificarNombre, modificarPrimerApellido, modificarSegundoApellido, modificarFA,modificarFB) {
       
       this.nombre = modificarNombre
       this.primerApellido = modificarPrimerApellido
       this.segundoApellido = modificarSegundoApellido
    
    }    
    

  
    //metodo que borra los usuarios ID
    borrarUsuarios() {
        delete Usuario.id
    }


    //metodo que calculo los libros prestados y también los que están vencidos
    libros_prestados() {
    


    }

}
let usuario = new Usuario('Cris',null,null,null)
console.log(usuario.id)
console.log(usuario)

//export default Usuario;
