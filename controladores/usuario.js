class Usuario {
    constructor(nombre, primerApellido, segundoApellido, fechaAlta, fechaBaja) {
        this.id = this.crearIdUsuario()
        this.nombre = nombre || 'Sin nombre'
        this.primerApellido = primerApellido || 'Sin primerApellido'
        this.segundoApellido = segundoApellido || 'Sin segundoApellido'
        this.fechaAlta = fechaAlta || Date()
        this.fechaBaja = fechaBaja || 'Usuario Activo'
        this.librosPrestados = [] || ''
    }


    /**
     * @version 0.0.1
     * Método que crear el usuario ID
     * @return {usuarioID}
     */
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
    /**
    * @version 0.0.1
    * Método que modifica los parámetros los usuarios.
    * @param {modificarNombre} ,
    * @param {modificarPrimerApellido},
    * @param {modificarSegundoApellido}, 
    * @param {modificarFA},
    * @param {modificarFB}
    */
    modificarUsuarios(modificarNombre, modificarPrimerApellido, modificarSegundoApellido, modificarFA, modificarFB) {
        this.nombre = modificarNombre || this.nombre
        this.primerApellido = modificarPrimerApellido || this.primerApellido
        this.segundoApellido = modificarSegundoApellido || this.segundoApellido
        this.fechaAlta = modificarFA || this.fechaAlta
        this.fechaBaja = modificarFB || this.fechaBaja
    }

    /**
   * @version 0.0.1
   * Método que borra los usuarios
   * @param {listUsuarios} ,
   */
    borrarUsuarios(listUsuarios) {
        listUsuarios.forEach(e => {
            if (this.id === e.id) {
                listUsuarios.splice(listUsuarios.indexOf(e), 1)
            }
        })
    }
    listarLibrosPrestados() {
        this.librosPrestados.forEach((libro, index) => {
          console.log("Libro" + index, libro);
        });
      }
    }


export default Usuario;
