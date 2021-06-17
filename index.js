var express = require('express');
var routes = require("./routes/api");
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(routes);
app.listen(3000, () => {
    console.log("...on 3000")
})