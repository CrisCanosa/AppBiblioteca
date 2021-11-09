class Bibliotecario{
    constructor(nombre, primerApellido, segundoApellido, fechaAlta, fechaBaja){
        this.id= this.crearIdBibliotecario()
        this.nombre=nombre || "nombre"
        this.primerApellido=primerApellido || "apellido1"
        this.segundoApellido=segundoApellido || "apellido2"
        this.fechaAlta=fechaAlta || new Date(2021,1,1)
        this.fechaBaja=fechaBaja || new Date(2021,1,2)
    }
    
    //metodo para generar un id aleatorio a cada bibliotecario
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
    //metodo para modificar los bibliotecarios
    modificarBibliotecarios(modificarNombre, modificarPrimerApellido, modificarSegundoApellido, modificarFA, modificarFB) {
        this.nombre = modificarNombre || this.nombre
        this.primerApellido = modificarPrimerApellido || this.primerApellido
        this.segundoApellido = modificarSegundoApellido || this.segundoApellido
        this.fechaAlta = modificarFA || this.fechaAlta
        this.fechaBaja = modificarFB || this.fechaBaja
    }
    //metodo que borra los bibliotecarios
    borrarBibliotecarios(listBibliotecarios) {
        listBibliotecarios.forEach(e => {
            if(this.id === e.id){
                listBibliotecarios.splice(listBibliotecarios.indexOf(e), 1)
            }
        })
    }

    //metodo para mostrar las transacciones ya ejecutadas
    transaccionesEjecutadas(){

    }
}

export default Bibliotecario;