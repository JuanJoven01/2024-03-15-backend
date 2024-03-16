const {Solicitud} = require('../database/models')

// - Consultar, eliminar e insertar información de la tabla Solicitud.
// - Cuando se visualicen los datos de la tabla solicitud se debe mostrar el nombre
// del empleado y no el id_empleado.

class SolicitudServices{
    constructor(){

    }

    static async newRequest (request) {
        const theNewRequest = await Solicitud.create(request)
        return theNewRequest
    }
}


module.exports = SolicitudServices