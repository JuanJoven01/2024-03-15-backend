const express = require ('express')
const validatorHandler = require('../middlewares/validator.handler')
const router = express.Router() 

const { newEmployeeSchema } = require('../shemas/expleado.schema')
const empleadoServices = require('../services/empleado.services.js')

router.get('/', async (req,res) => {
    res.json({'message':'empleado'})
})

router.post('/new', validatorHandler(newEmployeeSchema, 'body'),
async (req,res, next) => {
    try{
        const employee= req.body
        const newEmployee = await empleadoServices.newEmployee(employee)
        res.json(newEmployee)
    }catch(error){
        next(error)
    }
    

})

module.exports = router