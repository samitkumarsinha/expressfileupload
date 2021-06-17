
module.exports = {
  readdata(req, res) {
    console.log(req.files)
    res.send(req.body)
  },
  readjson(req,res){
    res.send(req.body);
  }
};

