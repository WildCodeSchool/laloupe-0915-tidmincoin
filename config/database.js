// DATABASE CONFIG
var Sequelize = require('sequelize');

module.exports = new Sequelize('tidmincoin', 'root', 'cuicuishoushou', {
  host: 'localhost',
  dialect: 'mysql'
});

