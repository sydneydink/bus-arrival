// This is a default REST route template. 
// This  need to be registered in the route index file using
// router.use('/product', require('./product.js'));

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var jwt = require('express-jwt');
var auth = jwt({secret: 'SECRETAPP', requireProperty:'payload'}); //todo, change the secret

var Participant = mongoose.model('Participant'); 


/********************************/
/********** ROUTES **************/
/********************************/
/*Params */

/* Render view file */
router.get('/', function(req, res, next){
	
	Participant.find(
		{}, // find all
		function(err,models){
			if(err) return next(err);

			res.render( "view-all-participant" , {
				models: models, 
				modelName: 'Participant'
			});
		})

});	


module.exports = router;