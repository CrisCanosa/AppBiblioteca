class Transaccion {
    constructor(idBibliotecario,idUsuario,idLibro){
        this.id= this.crearIdTransaccion()
        this.idLibro = idLibro
        this.idBibliotecario = idBibliotecario
        this.idUsuario = idUsuario
        this.fechaPrestamo = Date()
        this.fechaLimitePrestamo = new Date(new Date().setDate(new Date().getDate() + 20))
        this.fechaPrestamoExpirado = this.fechaPrestamoExpirado()   
        this.tipoPrestamo = tipoPrestamo
    }

    crearIdTransaccion() {
        let letras = ['a', 'b', 'c', 'v', 'g', 'e', 'h', 'z', 'r'] //array de letras
        let numeros = [1, 3, 5, 7, 9, 0, 6, 4, 8] //array de números
        let transaccionID = '' //string vacio donde se van a generar los id
        for (let i = 0; i < 6; i++) { //definimos la i porque solo va a estar en el momento del bucle
            transaccionID = transaccionID + letras[Math.ceil(Math.random() * letras.length - 1)] //generamos las letras
            transaccionID = transaccionID + numeros[Math.ceil(Math.random() * numeros.length - 1)] //generamos los numeros
        }
        return transaccionID //devolvemos la ID transacción
    }
    fechaPrestamoExpirado() {
       return Date() >= this.fechaLimitePrestamo
   }
}


export default Transaccion;