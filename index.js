var express = require('express');
var routes = require("./routes/api");
// var multer = require('multer');
// var upload = multer();
var app = express();
// app.use(upload.array("files", 100));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(routes);
app.listen(3000, () => {
    console.log("...on 3000")
})