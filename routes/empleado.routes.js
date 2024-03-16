const express = require ('express')
const validatorHandler = require('../middlewares/validator.handler')
const router = express.Router() 

const {newEmployeeSchema}  = require('../shemas/empleado.schema.js')
const empleadoServices = require('../services/empleado.services.js')

router.get('/', async (req,res) => {
    res.json({'message':'empleado'})
})

router.post('/new', validatorHandler(newEmployeeSchema, 'body'),
async (req, res, next) => {
    try{
        const employee = req.body;
        console.log('===========')
        console.log(req.body)
        const newEmployee = await empleadoServices.newEmployee(employee)
        res.json(newEmployee)
    }catch(error){
        next(error)
    }
    

})

router.post('/other', (req, res) => {
    console.log(req.body)
    res.json(req.body)
})


module.exports = router