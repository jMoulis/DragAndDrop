var express = require("express");
var multer = require("multer");
const cors = require("cors");
const mime = require("mime-types");
var app = express();

app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const extension = mime.extension(file.mimetype);
    const fileName = file.originalname;
    cb(null, `${fileName}.${extension}`);
  }
});

const upload = multer({ storage });

app.post("/upload", upload.single("myFile"), (req, res) => {
  try {
    if (req.file) {
      console.log("Uploading file...");
      console.log(req.file);
      var filename = req.file.filename;
      var uploadStatus = "File Uploaded Successfully";
      res.status(200).send({ message: "File uploaded" });
    } else {
      console.log("No File Uploaded");
      var filename = "FILE NOT UPLOADED";
      var uploadStatus = "File Upload Failed";
      res.status(422).send({ message: "Error while processing" });
    }
  } catch (error) {
    res.status(422).send({ message: error.message });
  }

  /* ===== Add the function to save filename to database ===== */

  //   res.render("index.hbs", {
  //     status: uploadStatus,
  //     filename: `Name Of File: ${filename}`
  //   });
});

const PORT = 3030;
app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));
