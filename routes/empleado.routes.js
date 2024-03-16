const express = require ('express')
const validatorHandler = require('../middlewares/validator.handler')
const router = express.Router() 

const {newEmployeeSchema, putEmployeeSchema, getEmployeeByName}  = require('../shemas/empleado.schema.js')
const empleadoServices = require('../services/empleado.services.js')


/*
Receive the next data and use the service to create a new employee in db
data schema on schemas as newEmployeeSchema
{
    "fecha_ingreso": "2024-03-20",
    "nombre": "Juan Joven",
    "salario": 3500000
}
*/
router.post('/new', validatorHandler(newEmployeeSchema, 'body'),
async (req, res, next) => {
    try{
        const employee = req.body;
        const newEmployee = await empleadoServices.newEmployee(employee)
        res.json(newEmployee)
    }catch(error){
        next(error)
    }

})

/*
Receive the next data and use the service to create a new employee in db
data schema on schemas as putEmployeeSchema
{
    "id": 1,
    "fecha_ingreso": "2024-03-20",
    "nombre": "Juan Joven",
    "salario": 3800000
}
*/
router.put('/update', validatorHandler(putEmployeeSchema, 'body'),
async (req, res, next) => {
    try{
        const employee = req.body;
        const updatedEmployee = await empleadoServices.getEmployeesByName(employee)
        res.json(updatedEmployee)
    }catch(error){
        next(error)
    }

})

/*
Just call all the users register on db
Do not receives additional data
*/
router.get('/all', 
async (req, res, next) => {
    try{
        const allEmployees = await empleadoServices.getEmployees()
        res.json(allEmployees)
    }catch(error){
        next(error)
    }

})

/*
Receive the next data and use the service to find a employee with similar name in db
data schema on schemas as getEmployeeByName
{
    "nombre": "juan"
}
*/
router.get('/get/by-name', validatorHandler(getEmployeeByName, 'body'),
async (req, res, next) => {
    try{
        const name = req.body.nombre
        const allEmployees = await empleadoServices.getEmployees(name)
        res.json(allEmployees)
    }catch(error){
        next(error)
    }

})


module.exports = router