const Joi = require('joi');

const newRequestSchema = Joi.object(
    {
        codigo: Joi.string().max(50).required(),
        descripcion: Joi.string().max(50).required(),
        resumen: Joi.string().max(50),
        id_empleado : Joi.number().integer().required()
    }
)

const updateRequestSchema = Joi.object(
    {
        id: Joi.number().integer(),
        codigo: Joi.string().max(50).required(),
        descripcion: Joi.string().max(50).required(),
        resumen: Joi.string().max(50),
        id_empleado : Joi.number().integer().required()
    }
)


module.exports = {newRequestSchema, updateRequestSchema}