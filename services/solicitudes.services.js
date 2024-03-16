const crypto = require('crypto');
const {Solicitud, Empleado} = require('../database/models')
const boom = require('@hapi/boom')


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

    static async getAllRequest() {
        const requests = await Solicitud.findAll(
            {
                include: {
                    model: Empleado
                }
            }
        )
        return requests
    }

    static async deleteRequestById(id) {
        const deleted = await Solicitud.destroy(
            {
                where: {
                    id: id
                }
            }
        )
        return {'message': 'Solicitud Eliminada'}
    }

    static async __getRequestById(id) {
        const request = await Solicitud.findByPk(id)
        return request
    }
}


module.exports = SolicitudServices