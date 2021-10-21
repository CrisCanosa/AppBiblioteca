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

    constructor(id,titulo,autor,editorial,prestado,venta) {
        this.id = id
        this.titulo = titulo
        this.autor = autor 
        this.editorial = editorial
        this.prestado = this.esPrestado() // supongo que tengo que crear un método para esto
        this.venta = this.alaVenta() // supongo que aquí tengo que crear otro método para esto otro tb
    }
}

//
