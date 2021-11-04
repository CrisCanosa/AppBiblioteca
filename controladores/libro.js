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
    constructor(titulo, autor, editorial, fechaprimeraedicion, prestado, venta, historicoPrestamos) {
        this.id = id || this.getAleatoryId()
        this.titulo = titulo || "crónica de una muerte anunciada"
        this.autor = autor || "gabriel garcía márquez"
        this.editorial = editorial || "alfaguara"
        this.fechaprimeraedicion = fechaprimeraedicion || "20-12-1985"
        this.prestado = this.esPrestado() // supongo que tengo que crear un método para esto
        this.venta = this.alaVenta() // supongo que aquí tengo que crear otro método para esto otro tb
        this.historicoPrestamos = this.historicoPrestamos()
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

    /*CAMBIA ESTO*/
    modificarLibros(modificarNombre, modificarPrimerApellido, modificarSegundoApellido, modificarFA, modificarFB) {
        this.nombre = modificarNombre || this.nombre
        this.primerApellido = modificarPrimerApellido || this.primerApellido
        this.segundoApellido = modificarSegundoApellido || this.segundoApellido
        this.fechaAlta = modificarFA || this.fechaAlta
        this.fechaBaja = modificarFB || this.fechaBaja
    }
    
    borrarLibros(listLibros) {
        listLibros.forEach(e => {
            if (this.id === e.id) {
                listLibros.splice(listLibros.indexOf(e), 1)
            }
        })
    }
    


}
export default Libro;
//
