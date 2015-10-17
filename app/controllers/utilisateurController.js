// CONTROLLER utilisateur

var utilisateur = require('../models/utilisateur.js');

module.exports 	= function(app) {

	app.get('/utilisateurs', utilisateur.findAll);

	app.get('/utilisateurs/:id', utilisateur.find);

	app.post('/utilisateurs', utilisateur.create);

	app.put('/utilisateurs/:id', utilisateur.update);

	app.delete('/utilisateurs/:id', utilisateur.delete);

}