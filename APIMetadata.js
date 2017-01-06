var express = require("express");
var app = express();
var fs = require("fs");
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

app.post("/get-file-size", upload.single("file"), function(req, res){
    res.set("Content-Type", "application/json");
    res.send(JSON.stringify({"size" : req.file.size}));
    fs.unlink(req.file.path)
});

app.use(express.static('public'));
app.listen(process.env.PORT, process.env.IP);
