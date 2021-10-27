import {usuario} from './usuario.js'

class transaccion {
    constructor(id, id_libro_prest, id_usuario, id_bibliotecario, fecha_trans, tipo_prest){
        this.id = id
        this.id_libro_prest = id_libro_prest
        this.id_usuario = id_usuario
        this.id_bibliotecario = id_bibliotecario
        this.fecha_trans = fecha_trans
        this.tipo_prest = tipo_prest
    }

    calcularLibrosPrestados() {

    }
}
export default transaccion;