//Available in nodejs
var NodeWebcam = require( "node-webcam" );
var FSWebcam = NodeWebcam.FSWebcam;


 var _opts = {
            //Picture related
            //width: 1280,
            width: 800,
            //height: 720,
            height: 600,
            quality: 100,
            delay: 0,
            saveShots: false,
            // [jpeg, png] support varies
            // Webcam.OutputTypes
            output: "jpeg",
            // [location, \, base64]
            // Webcam.CallbackReturnTypes
            //callbackReturn: "base64",
            callbackReturn: "base64",
            verbose: true

        };


var Webcam = NodeWebcam.create( _opts );
function CamHelper(){}


CamHelper.prototype.tiraFotos = function(cb) {
 let imgs = [];
    let x = 0;
    Webcam.list(listaDeCameras=> {
        let quantidadeCameras = listaDeCameras.length;
        for (let cam of listaDeCameras) {
            x++;
            _opts.device = cam;
            NodeWebcam.capture( "test_picture"+x, _opts, (err,data) => {

                console.log(quantidadeCameras+" - "+x);
                imgs.push(data);
                if(quantidadeCameras==x){
                    cb(imgs);
                }
            });

        }
    });
}

module.exports = function(){
    return CamHelper;
}