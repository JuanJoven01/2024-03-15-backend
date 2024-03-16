const {Empleado} = require('../database/models')

// - Consultar e insertar información de la tabla empleado.
// - Consultar empleados por nombre.


// first define class to the services to the table empleado
class empleadoServices{
    constructor(){

    }

    static async newEmployee(employee) {
        const theNewEmployee = Empleado.create(
            employee
        )

        return theNewEmployee
    }




}

module.exports = empleadoServices