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
  cp: Sequelize.INTEGER(5),
  admin: Sequelize.BOOLEAN,
  dialecte: Sequelize.STRING


});

Utilisateur.sync().then(function(){});

module.exports.create = function(req, res) {
	Utilisateur.findOrCreate( { where : {
        pseudo: req.body.pseudo,
        }, defaults: {
            nom: req.body.nom,
            prenom: req.body.prenom,
            genre: req.body.genre,
            motdp: req.body.motdp,
            naissance: req.body.naissance,
            adresse: req.body.adresse,
            cp: req.body.cp,
            admin: req.body.adm,
            dialecte: req.body.dialecte
        }
    }).then(function (data) {
        var created  = data[1];
        if( created ){
             res.sendStatus(200);
        } else {
            res.sendStatus(409);
        }
       
	});
};




/*module.exports.create = function(req, res) {
	Utilisateur.findOne({
		where:{
			pseudo:req.body.pseudo
		}
	}).then(function (data) {
		if (data == null){ 
			Utilisateur.create({
				nom: req.body.nom,
				prenom: req.body.prenom,
				genre: req.body.genre,
				pseudo: req.body.pseudo,
				motdp: req.body.motdp,
				naissance: req.body.naissance,
				adresse: req.body.adresse,
				cp: req.body.cp,
				admin: req.body.adm
			}).then(function(){
				res.sendStatus(200);
			}, function(){
				res.sendStatus(500);
			})
		}
		else res.sendStatus(500);
	});
};
*/




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
		cp: req.body.cp,
		admin: req.body.admin
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
	}).then(function(user){
		if(!user)
			res.sendStatus(404);
		else
			res.json(user);
	})
}
