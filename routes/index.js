const empleadosRouter = require('./empleado.routes')
const solicitudesRouter = require('./solicitudes.routes')

function routerApi(app){
    app.use('/empleados', empleadosRouter)
    app.use('/solicitudes', solicitudesRouter)
}

module.exports = routerApi;