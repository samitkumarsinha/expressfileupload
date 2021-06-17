var multer = require("multer");
var uploadfile = (req, res, next) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
  const upload = multer({ storage: storage }).array("files", 100);
  upload(req, res, (err) => {
    if (err) {
      res.status(401).send("Something went wrong!");
    }
    //   res.json({ message: "Successfully uploaded files" });
    next();
  });
}
module.exports = uploadfile;
