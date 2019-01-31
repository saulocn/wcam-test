//Available in nodejs
var NodeWebcam = require( "node-webcam" );
var FSWebcam = NodeWebcam.FSWebcam;

//Default options
var opts = {
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
    // [location, buffer, base64]
    // Webcam.CallbackReturnTypes
    //callbackReturn: "base64",
    callbackReturn: "base64",
    verbose: true

};

var Webcam = NodeWebcam.create( opts );

async function printFiles () {
  const cams = await Webcam.list(l=> {

        let x = 0;
      for (let cam of l) {
        x++;
        opts.device = cam;
        NodeWebcam.capture( "test_picture"+x, opts, (err,data) => console.log(data));

      }

  });
}

printFiles();