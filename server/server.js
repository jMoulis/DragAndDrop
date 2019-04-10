var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express()

app.post('/upload', upload.single('drag'), function (req, res, next) {
    var upload = req.body;
    res.status(204).end()
})


const PORT = 3000;

// run server
app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));
