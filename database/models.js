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
  modelName: 'empleado' 
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
  modelName: 'solicitud'
});

// console.log(Solicitud === sequelize.models.solicitud); // true


// Relations
Solicitud.belongsTo(Empleado)

Empleado.hasMany(Solicitud, { foreignKey: 'id_empleado'})
