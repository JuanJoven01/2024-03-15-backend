const { Op } = require('sequelize')
const {Empleado} = require('../database/models')
const boom = require('@hapi/boom')

// first define class to the services to the table empleado
class empleadoServices{
    constructor(){

    }
    /*
    INSERT INTO empleado (fecha_ingreso, nombre, salario)
    VALUES (fecha, nombre, salario);
    */
    static async newEmployee(employee) {
        const theNewEmployee = await Empleado.create(
            employee
        )
        return theNewEmployee
    }

    /*
    UPDATE empleado
    SET fecha_ingreso = 'fecha', nombre = 'nombre', salario = salario
    WHERE id = <id>;

    */
    static async updateEmployee(employee) {
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
    /*
    SELECT * FROM empleado;
    */
    static async getEmployees() {
        const allEmployees = await Empleado.findAll()
        return allEmployees
    }
    /*
    SELECT * FROM empleado WHERE id = <id>;
    */
    static async __getEmployeeById (id) {
        const employee = await Empleado.findByPk(id)
        return employee
    }
    /*
    SELECT * FROM empleado WHERE nombre ILIKE '%nombre%';
    */
    static async getEmployeesByName(name) {
        const employees = await Empleado.findAll({
            where: {
                nombre: {
                    [Op.iLike]: `%${name}%`
                }
            }
        });
        return employees
    }
}

module.exports = empleadoServices