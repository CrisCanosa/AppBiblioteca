/*Vilas 

- LIBRO
        - Id 
        - Titulo
        - Autor
        - Editorial
        - Fecha primera edición
        - Está prestado
        - Esta a la venta al publico (esto especifíca si el libro aún se vende en el mercado o ya no)


*/


class Libro {
    constructor(titulo, autor, editorial, fechaPrimeraEdicion, prestado, venta) {
        this.id = this.getAleatoryId()
        this.titulo = titulo || "crónica de una muerte anunciada"
        this.autor = autor || "gabriel garcía márquez"
        this.editorial = editorial || "alfaguara"
        this.fechaPrimeraEdicion = fechaPrimeraEdicion || new Date(1985,12,20)
        this.prestado = prestado || "sí"
        this.venta = venta || false
        
    }


    getAleatoryId() {
        let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        let id = ''
        for (let i = 0; i < 6; i++) { //la i tiene que estar definida aquí porque sólo existe en el momento que existe el bucle
            id = id + letters[this.getAleatoryNumber(letters.length)] + numbers[this.getAleatoryNumber(numbers.length)]
        }

        return id
    }

    getAleatoryNumber(max) {
        return Math.floor(Math.random * max)
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
