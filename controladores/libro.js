class Libro {
    constructor(titulo, autor, editorial, fechaPrimeraEdicion, prestado, venta) {
        this.id = this.crearIdLibro()
        this.titulo = titulo || "crónica de una muerte anunciada"
        this.autor = autor || "gabriel garcía márquez"
        this.editorial = editorial || "alfaguara"
        this.fechaPrimeraEdicion = fechaPrimeraEdicion || new Date(1985,12,20)
        this.prestado = false
        this.venta = false
        
    }
    crearIdLibro() {
        let letras = ['a', 'b', 'c', 'v', 'g', 'e', 'h', 'z', 'r'] //array de letras
        let numeros = [1, 3, 5, 7, 9, 0, 6, 4, 8] //array de números
        let LibroID = '' //string vacio donde se van a generar los id
        for (let i = 0; i < 6; i++) { //definimos la i porque solo va a estar en el momento del bucle
            LibroID = LibroID + letras[Math.ceil(Math.random() * letras.length - 1)] //generamos las letras
            LibroID = LibroID + numeros[Math.ceil(Math.random() * numeros.length - 1)] //generamos los numeros
        }
        return LibroID //devolvemos el Libro ID
    }

    

   
    modificarLibros(modificarTitulo, modificarAutor, modificarEditorial, modificarFPE, modificarPrestado, modificarVenta, modificarHistoricoPrest) {
        this.titulo = modificarTitulo || this.titulo
        this.autor = modificarAutor || this.autor
        this.editorial = modificarEditorial || this.editorial
        this.fechaPrimeraEdicion = modificarFPE || this.fechaPrimeraEdicion
        this.prestado = modificarPrestado || this.prestado
        this.venta = modificarVenta || this.venta
        this.historicoPrestamos = modificarHistoricoPrest || this.historicoPrestamos

    }
    
    borrarLibros(listLibros) {
        listLibros.forEach(e => {
            if (this.id === e.id) {
                listLibros.splice(listLibros.indexOf(e), 1)
            }
        })
    }




    /*
    alaVenta() {
        return this.venta


        
    }
    */
    





}

export default Libro;
//
