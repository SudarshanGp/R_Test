var express = require('express'),
    path = require('path'),
    multer = require('multer'),
    bodyParser = require('body-parser'),
    app = express();
// var exec = require('child_process').exec, child;
app.use(bodyParser.urlencoded({extended: true}));
app.use(multer({dest: 'uploads'})); // dest is not necessary if you are happy with the default: /tmp
app.use(express.static(path.join(__dirname, 'bower_components')));

// routes
app.get('/', function (req, res) {

res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/', function (req, res) {
    app.use(express.static(__dirname + '/')); 
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
});

var server = app.listen(3000, function () {
    var host = server.address().address,
        port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

