class Usuario {
    constructor(id,nombre, primerApellido, segundoApellido, fechaAlta, fechaBaja) {
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
   
    setNombre(nuevoNombre){
        this.nombre = nuevoNombre
    }
    
    setPrimerApellido(nuevoApellido){
        this.primerApellido = nuevoApellido
    }
    
    setSegundoApellido(nuevo2Apellido){
        this.segundoApellido = nuevo2Apellido
    }
    setfechaAlta(nuevaFA){
        this.fechaAlta = nuevaFA
    }
    
    setfechaBaja(nuevaFB){
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
    modificarUsuarios(modificarNombre, modificarPrimerApellido, modificarSegundoApellido,modificarFA,modificarFB) {
       this.nombre = modificarNombre
       this.primerApellido = modificarPrimerApellido
       this.segundoApellido = modificarSegundoApellido
       this.fechaAlta = modificarFA
       this.fechaBaja = modificarFB
    }    
    

  
    //metodo que borra los usuarios ID
    borrarUsuarios() {
        
    }


}
let usuario = new Usuario('Cris',null,null,null,null)
usuario.nombre = "Juan"

console.log(usuario)

//export default Usuario;
