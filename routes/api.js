var express = require('express');
var router = express.Router();
var usercontroller = require('../controllers/usercontroller')
var uploadf = require('../middleware/upload');
router.post("/upload", uploadf, usercontroller.readdata);
router.post("/getjson", usercontroller.readjson);
module.exports = router