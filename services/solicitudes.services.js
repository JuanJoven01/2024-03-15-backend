const crypto = require('crypto');
const {Solicitud} = require('../database/models')
const boom = require('@hapi/boom')

// - Consultar, eliminar e insertar información de la tabla Solicitud.
// - Cuando se visualicen los datos de la tabla solicitud se debe mostrar el nombre
// del empleado y no el id_empleado.

class SolicitudServices{
    constructor(){

    }

    static async newRequest(request) {
        const theNewRequest = await Solicitud.create(request)
        return theNewRequest
    }

    static async updateRequest(request) {
        const theRequest = await this.__getRequestById(request.id)
        if (!theRequest){
            throw boom.badRequest('Invalid user to update')
        }
        await Solicitud.update(
            request,
            {
                where: {
                    id: request.id
                }
            }
        )
        const updatedRequest = await this.__getRequestById(request.id)
        return updatedRequest
    }

    static async __getUid() {
        const uid = await crypto.randomBytes(16).toString('hex');
        return uid
    }

    static async __getRequestById(id) {
        const request = await Solicitud.findByPk(id)
        return request
    }
}


module.exports = SolicitudServices