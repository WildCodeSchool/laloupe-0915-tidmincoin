// DATABASE CONFIG
var Sequelize = require('sequelize');

module.exports = new Sequelize('tidmincoin1', 'root', 'azerty12', {
  host: 'localhost',
  dialect: 'mysql'
});

