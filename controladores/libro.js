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
        this.id = id || this.getAleatoryId()
        this.titulo = titulo
        this.autor = autor 
        this.editorial = editorial
        this.prestado = this.esPrestado() // supongo que tengo que crear un método para esto
        this.venta = this.alaVenta() // supongo que aquí tengo que crear otro método para esto otro tb
    }


    getAleatoryId() {
        let letters = ['a','b','c','d','e','f','g','h','i']
        let numbers = [1,2,3,4,5,6,7,8,9]
        let id = ''
        for (let i = 0; i < 6; i++){ //la i tiene que estar definida aquí porque sólo existe en el momento que existe el bucle
            id = id + letters[this.getAleatoryNumber(letters.length)] + numbers[this.getAleatoryNumber(numbers.length)]
        }

        return id
    }

    getAleatoryNumber(max) {
        return Math.floor(Math.random * max)
    }


    
    esPrestado() {
        if(this.prestado=1) { //entiendo que esto tiene que preguntar a otra parte del código si está prestado o no.
            return true
        }else {            
            return false          
    }
}
}
//
