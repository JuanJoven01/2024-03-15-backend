const Joi = require('joi');

const newEmployeeSchema = Joi.object(
    {
        fecha_ingreso: Joi.date().required(),
        nombre: Joi.string().max(50).required(),
        salario: Joi.number().integer().required()
    }
)

const putEmployeeSchema = Joi.object(
    {
        id: Joi.number().integer().required(),
        fecha_ingreso: Joi.date().required(),
        nombre: Joi.string().max(50).required(),
        salario: Joi.number().integer().required()
    }
)

module.exports = {newEmployeeSchema, putEmployeeSchema}