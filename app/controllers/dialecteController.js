// CONTROLLER dialecte

var dialecte = require('../models/dialecte.js');

module.exports 	= function(app) {

	app.get('/dialectes', dialecte.findAll);

	app.post('/dialectes', dialecte.create);

	app.put('/dialectes/:id', dialecte.update);

	app.delete('/dialectes/:id', dialecte.delete);

}