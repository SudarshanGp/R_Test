var express = require('express'),
    path = require('path'),
    multer = require('multer'),
    bodyParser = require('body-parser'),
    // expressrefresh = require('express-refresh'),
    app = express();
var exec = require('child_process').exec, child;
app.use(bodyParser.urlencoded({extended: true}));
app.use(multer({dest: 'uploads'})); // dest is not necessary if you are happy with the default: /tmp
app.use(express.static(path.join(__dirname, 'bower_components')));

 // window=dom(page,null,options); //global
            // global.jQuery = global.$ = window.jQuery

            // document=window.document; //global
// routes
app.get('/', function (req, res) {
    res.send('<html><head><title>Dropzone example</title><link href="/dropzone/downloads/css/dropzone.css" rel="stylesheet"><script src="https://code.jquery.com/jquery-2.1.3.min.js"></script></head><body><h1>Using Dropzone</h1><form method="post" action="/" class="dropzone" id="dropzone-example"><div class="fallback"><input name="file" type="file" multiple /></div></form><p><a href="/old">Old form version</a></p><button id="test">TEST</button> <div id="image-zoom"> <img id="image" width=500 height=500 src="rplot.jpg"> </div>   <script>$(document).ready(function(){ $("#test").click(function(){  setInterval(function(){ $("#image").attr("src", "/rplot.jpg?"+new Date().getTime());},2000); });});    </script>   <script src="/dropzone/downloads/dropzone.js"></script></body></html>');});

app.get('/old', function (req, res) {
    res.send('<html><head><title>Dropzone example</title><link href="/dropzone/downloads/css/dropzone.css" rel="stylesheet"></head><body><h1>Old form</h1><form method="post" action="/" id="old-example" enctype="multipart/form-data"><input name="file" type="file" multiple /><button>Save</button></form><script src="/dropzone/downloads/dropzone.js"></script></body></html>');
});

app.post('/', function (req, res) {
    //console.log(req.files);

    var files = req.files.file;
    if (Array.isArray(files)) {
        // response with multiple files (old form may send multiple files)
        console.log("Got " + files.length + " files");
    }
    else {
        // dropzone will send multiple requests per default
        console.log("Got one file");
    }
    res.sendStatus(200);
    child = exec('cp uploads/*.csv uploads/1.csv; ls -d -1 uploads/*.* | grep -v \'1.csv\' | xargs rm; Rscript test.R; rm -rfv uploads/*',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }

    console.log(res.body);
    // res.end('It worked!');
    // res.redirect("/")
  // res.json(req.body);
    // var img = document.createElement("img");
    // img.src = "rplot.jpg";
    // img.width = 500;
    // img.height = 500;
    // // This next line will just add it to the <body> tag
    // document.body.appendChild(img);
    // window.location.reload();
    // location.assign("localhost:3000");
    // res.redirect('https://google.com');
});
});

var server = app.listen(3000, function () {
    var host = server.address().address,
        port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

