//Importar las clases necesarias
import { Libro } from "./controladores/libro.js";
import { Transaccion } from "./controladores/transaccion";
import { Usuario } from "./controladores/transaccion";
 
export default class Biblioteca{
    constructor(id, nombre, direccion, codigoPostal, pais){
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion
        this.codigoPostal = codigoPostal
        this.pais = pais
    }
    
    //La clase biblioteca HA DE TENER UNA FUNCION QUE CALCULE CUALES SON LOS LIBROS QUE TIENEN EL PRESTAMO EXPIRADO
    librosPrestamosExpirados(arrayDeLibrosTotalesDeLaClaseLibro){
        /*
        Necesitamos crear un array vacío para rellenarlo posteriormente de los libros que tienen el préstamo expirado
        un for con la siguiente condicion
        if transaccion.fechaTransaccion y la fecha actual (calcular la fecha actual aquí) supera transaccion.tipoDePrestamo (7, 14, 31 dias) tiene el prestamo expirado
        hacer un push a la array de libros expirados que creamos
        Nota: Para calcular la diferencia de días hay que tener en cuenta el formato en el que está la fecha de transacción
        
        
        let librosExpirados = []
        for(let i = 0; i=<arrayDeLibrosTotalesDeLaClaseLibro; i++){
            if(currentDate-dateTransaccionLibro > 7||14||31 en funcion del valor de transaccion.tipoPrestamofuncion)){
                librosExpirados.push(arrayDeLibrosTotalesDeLaClaseLibro))
            }
        }
        */ 
    }

    /*Ha de poder enviar mensajes a los usuarios si se pasan de la fecha de prestamo
    Esta parte podría mirar de hacerse aquí a continuación de la función de librosPrestamosExpirados()
    Crear aquí una función que llame a los usuarios de la clase Usuario cuyos libros han sido expirados*/
}
biblioteca = new Biblioteca(1, 'Vilas', 'Rúa Ribadavia, 5', '15007', 'España')
console.log(biblioteca)


