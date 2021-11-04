class Transaccion {
    constructor(idBibliotecario,idUsuario,idLibro){
        this.idLibro = idLibro
        this.idBibliotecario = idBibliotecario
        this.idUsuario = idUsuario
        this.fechaPrestamo = Date()
        this.diasMaximo = 20
        this.fechaLimitePrestamo = new Date(new Date().setDate(new Date().getDate() + 20))
        this.fechaPrestamoExpirado = false   
    }

    fechaPrestamoExpirado() {
       return Date() >= this.fechaLimitePrestamo
   }
}


export default Transaccion;