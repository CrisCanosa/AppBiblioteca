

class transaccion {
    constructor(idBibliotecario,IdUsuario,idLibro){
        this.idLibro = idLibro
        this.idBibliotecario = idBibliotecario
        this.IdUsuario = IdUsuario
        this.fechaPrestamo = Date()
        this.diasMaximo = 20
        this.fechaLimitePrestamo = new Date(new Date().setDate(new Date().getDate() + 20))
        
    }

   devolverLibro() {
       return Date() === fechaLimitePrestamo
   }
}
export default transaccion;