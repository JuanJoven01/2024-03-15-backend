const {Empleado} = require('../database/models')

// - Consultar e insertar información de la tabla empleado.
// - Consultar empleados por nombre.


// first define class to the services to the table empleado
class empleadoServices{
    constructor(){

    }

    static async newEmployee(employee) {
        const theNewEmployee = await Empleado.create(
            employee
        )
        return theNewEmployee
    }

    static async newEmployee(employee) {
        const theEmployee = await this.__getEmployeeById(employee.id)
        if (!theEmployee){
            throw boom.badRequest('Invalid user to update')
        }
        await Empleado.update(
            employee,
            {
                where: {
                    id: employee.id
                }
            }
        )
        const updatedEmployee = await this.__getEmployeeById(employee.id)
        return updatedEmployee
    }

    static async getEmployees() {
        const allEmployees = await Empleado.findAll()
        return allEmployees
    }

    static async __getEmployeeById (id) {
        const employee = await Empleado.findByPk(id)
        return employee
    }
}

module.exports = empleadoServices