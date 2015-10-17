// DATABASE CONFIG
var Sequelize = require('sequelize');

module.exports = new Sequelize('tidmincoin', 'root', 'jecode4laloupe', {
  host: 'localhost',
  dialect: 'mysql'
});

