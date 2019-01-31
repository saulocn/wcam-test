var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
module.exports = function(){
	var app = express();



	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());


	
    // middleware para que a página estática possa acessar
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });
	consign()
		.include('controllers')
		.include('helper')
		.into(app);
	return app;
}