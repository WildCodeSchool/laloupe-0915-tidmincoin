var Sequelize = require('sequelize');
var db = require('../../config/database.js');

var Dialecte = db.define('dialecte', {
  dialecte: Sequelize.STRING

});

Dialecte.sync().then(function(){
});

module.exports.create = function(req, res) {
	Dialecte.create({
		dialecte: req.body.dialecte
	}).then(function(){
		res.sendStatus(200);
	})
};

module.exports.findAll = function(req, res) {
	Dialecte.findAll().then(function (data) {
		res.json(data); 
	});
};

module.exports.update = function(req, res){
	Dialecte.update({
		dialecte: req.body.dialecte
	}, {
		where: {
			id: req.params.id
		}
	}).then(function(){
		res.sendStatus(200);
	})
}

module.exports.delete = function(req, res){
	Dialecte.destroy({
		where: {
			id: req.params.id
		}
	}).then(function(){
		res.sendStatus(200);
	})
}
