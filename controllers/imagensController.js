module.exports = function(app){ 
    app.get('/imgs', function(req, res){
        let camHelper = new app.helper.CamHelper();
		console.log(camHelper);
        camHelper.tiraFotos((imgs, err)=>{
            if(err) res.send(500);
            res.status(200);
        });
	});
}