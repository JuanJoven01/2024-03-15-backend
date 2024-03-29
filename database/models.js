const { DataTypes, Model } = require('sequelize');
const {sequelize} = require('./index')


// Model for Empleado
class Empleado extends Model {}

Empleado.init({
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
  sequelize, 
  modelName: 'Empleado',
  timestamps: false,
  tableName: 'empleado'
});

// console.log(Empleado === sequelize.models.empleado); // true

// Model for Solicitud
class Solicitud extends Model {}

Solicitud.init({
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
  sequelize,
  modelName: 'Solicitud',
  timestamps: false,
  tableName: "solicitud"
});

// console.log(Solicitud === sequelize.models.solicitud); // true


// Relationships between the models
Solicitud.belongsTo(Empleado, { foreignKey: 'id_empleado'})

Empleado.hasMany(Solicitud, { foreignKey: 'id_empleado'})


module.exports = {Empleado, Solicitud}