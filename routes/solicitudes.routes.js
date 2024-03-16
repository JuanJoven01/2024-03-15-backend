const express = require ('express')
const router = express.Router()
const validatorHandler = require('../middlewares/validator.handler')

const SolicitudServices = require('../services/solicitudes.services')

const { newRequestSchema } = require('../shemas/solicitudes.schemas')

/*
Receive the next data and use the service to create a new request in db
data schema on schemas as newEmployeeSchema
{
    "codigo": "AAAXXX01",
    "descripcion": "Inserte aqui su solicitud",
    "resumen": "Si asi lo desea agregue un resumen",
    "id_empleado" : 1
}
*/
router.post('/new', 
validatorHandler(newRequestSchema, 'body'),
async (req, res, next) => {
    try{
        const request = req.body;
        const newRequest = await SolicitudServices.newRequest(request)
        res.json(newRequest)
    }catch(error){
        next(error)
    }

})

module.exports = router