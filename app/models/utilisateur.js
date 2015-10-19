var Sequelize = require('sequelize');
var db = require('../../config/database.js');

var Utilisateur = db.define('utilisateur', {
  nom: Sequelize.STRING,
  prenom: Sequelize.STRING,
  genre: Sequelize.STRING,
  pseudo: Sequelize.STRING,
  motdp: Sequelize.STRING,
  naissance: Sequelize.DATE,
  adresse: Sequelize.STRING,
  cp: Sequelize.INTEGER(5)


});

Utilisateur.sync().then(function(){});

module.exports.create = function(req, res) {
	Utilisateur.create({
		nom: req.body.nom,
		prenom: req.body.prenom,
		genre: req.body.genre,
		pseudo: req.body.pseudo,
		motdp: req.body.motdp,
		naissance: req.body.naissance,
		adresse: req.body.adresse,
		cp: req.body.cp
	}).then(function(){
		res.sendStatus(200);
	}, function(){
		res.sendStatus(500);
	})
};

module.exports.findAll = function(req, res) {
	Utilisateur.findAll().then(function (data) {
		res.json(data); 
	});
};

module.exports.find = function(req, res) {
	Utilisateur.findOne({
		where:{
			id:req.params.id
		}
	}).then(function (data) {
		res.json(data); 
	});
};

module.exports.update = function(req, res){
	Utilisateur.update({
		nom: req.body.nom,
		prenom: req.body.prenom,
		genre: req.body.genre,
		pseudo: req.body.pseudo,
		motdp: req.body.motdp,
		naissance: req.body.naissance,
		adresse: req.body.adresse,
		cp: req.body.cp
	}, {
		where: {
			id: req.params.id
		}
	}).then(function(){
		res.sendStatus(200);
	})
}

module.exports.delete = function(req, res){
	Utilisateur.destroy({
		where: {
			id: req.params.id
		}
	}).then(function(){
		res.sendStatus(200);
	})
}

module.exports.checkLog = function(req, res){
	Utilisateur.findOne({
		where: {
			pseudo: req.body.pseudo,
			motdp:req.body.motdp
		}
	}).then(function(data){
		if(!data)
			res.sendStatus(404);
		else
			res.sendStatus(200);
	})
}
