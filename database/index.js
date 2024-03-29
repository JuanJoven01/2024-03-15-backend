const { Sequelize } = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "postgres"
});

async function tryConnection () {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}


//uncomment the bellow line to try the connection bellow sequelize and the db with the engine
// tryConnection()

module.exports = { sequelize }

