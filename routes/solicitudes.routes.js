const express = require ('express')
const router = express.Router()
const validatorHandler = require('../middlewares/validator.handler')

const SolicitudServices = require('../services/solicitudes.services')

const { newRequestSchema, updateRequestSchema, deleteRequestSchema } = require('../shemas/solicitudes.schemas')

/*
Receive the next data and use the service to create a new request in db
data schema on schemas as newRequestSchema
{
    "codigo": "c7c28aefe3c32be2bdc26369464c3fb1",
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

/*
Receive the next data and use the service to update a request in db
data schema on schemas as updateRequestSchema
{
    "id": 1
    "codigo": "c7c28aefe3c32be2bdc26369464c3fb1",
    "descripcion": "Inserte aqui su solicitud",
    "resumen": "Si asi lo desea agregue un resumen",
    "id_empleado" : 1
}
*/
router.put('/update', 
validatorHandler(updateRequestSchema, 'body'),
async (req, res, next) => {
    try{
        const request = req.body;
        const updatedRequest = await SolicitudServices.updateRequest(request)
        res.json(updatedRequest)
    }catch(error){
        next(error)
    }
})

/*
Receive the next data and use the service to delete a request in db
data schema on schemas as deleteRequestSchema
{
    "id": 1
}
*/
router.delete('/delete', 
validatorHandler(deleteRequestSchema, 'query'),
async (req, res, next) => {
    try{
        const request = req.query;
        const updatedRequest = await SolicitudServices.deleteRequestById(request.id)
        res.json(updatedRequest)
    }catch(error){
        next(error)
    }
})

/*
Do not receives data and return all the Solicitu in the db
*/
router.get('/get',
async (req,res,next) =>{
    const requests = await SolicitudServices.getAllRequest()
    res.json(requests)
})


/*
Do not receives data and return a uid to be used in the frontend by the user
to assign a codigo when execute the request to new servicio, but the user can use another code
*/
router.get('/get/uid',
async (req,res,next) =>{
    const uid = await SolicitudServices.__getUid()
    res.json({'uid': uid})
})

module.exports = router