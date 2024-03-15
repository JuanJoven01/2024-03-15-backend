const { DataTypes, Model } = require('sequelize');
const {sequelize} = require('../index')


// Model for Empleado
class Empleado extends Model {}

Empleado.init({
  // Model attributes are defined here
  fecha_ingreso: {
    type: DataTypes.DATE,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  salario: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'empleado' // We need to choose the model name
});

// the defined model is the class itself
console.log(Empleado === sequelize.models.empleado); // true

// Model for Solicitud
class Solicitud extends Model {}

Solicitud.init({
  // Model attributes are defined here
  codigo: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  resumen: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  id_empleado: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'solicitud' // We need to choose the model name
});


// the defined model is the class itself
console.log(Solicitud === sequelize.models.solicitud); // true


// Relations
Solicitud.belongsTo(Empleado)

Empleado.hasMany(Solicitud, { foreignKey: 'id_empleado'})
