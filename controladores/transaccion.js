class Transaccion {
    constructor(idBibliotecario,idUsuario,idLibro, tipoPrestamo) {
        this.id= this.crearIdTransaccion() || ''
        this.idLibro = idLibro || ''
        this.idBibliotecario = idBibliotecario || ''
        this.idUsuario = idUsuario || ''
        this.fechaPrestamo = Date() || ''
        this.fechaLimitePrestamo = this.fechaPrestamoExpirado(tipoPrestamo) || ''
        this.tipoPrestamo = tipoPrestamo || '7'
    }

    /**
     * @version 0.0.1
     * Método que genera un ID para la transacción
     * 
     * @return {String}
     */
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

    /**
     * @version 0.0.1
     * Método que calcula la fecha en la que expira el préstamo según el tipoPrestamo sea a 7, 14 o 31 días
     * 
     * @param {tipoPrestamo}
     * @return {Date}
     */
    fechaPrestamoExpirado(tipoPrestamo) {
        switch(tipoPrestamo) {
            case "7":
                return new Date(new Date().setDate(new Date().getDate() + 7))
            case "14":
                return new Date(new Date().setDate(new Date().getDate() + 14))
            case "31":
                return new Date(new Date().setDate(new Date().getDate() + 31))
        }
   }
}

export default Transaccion;