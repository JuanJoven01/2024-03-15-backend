const crypto = require('crypto');
const {Solicitud, Empleado} = require('../database/models')
const boom = require('@hapi/boom')


class SolicitudServices{
    constructor(){

    }
    /*
    INSERT INTO solicitud (codigo, descripcion, resumen, id_empleado)
    VALUES (codigo, descripcion, resumen, id_empleado);
    */
    static async newRequest(request) {
        const theNewRequest = await Solicitud.create(request)
        return theNewRequest
    }
    /*
    UPDATE solicitud
    SET codigo = 'codigo, descripcion = descripcion, resumen = resumen, id_empleado = id empleado
    WHERE id = <valor_id>;
    */
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
    /*
    Here the front can get a unique uid to use woth the requests
    */
    static async __getUid() {
        const uid = await crypto.randomBytes(16).toString('hex');
        return uid
    }
    /*
    SELECT
        solicitud.*,
        empleado.*
    FROM
        solicitud
    INNER JOIN
        empleado ON solicitud.id_empleado = empleado.id;
    */
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
    /*
    DELETE FROM solicitud
    WHERE id = <id>;
    */
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
    /*
    SELECT *
    FROM solicitud
    WHERE id = <id>;
    */
    static async __getRequestById(id) {
        const request = await Solicitud.findByPk(id)
        return request
    }
}


module.exports = SolicitudServices