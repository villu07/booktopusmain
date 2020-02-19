const express = require('express');
const multer = require('multer');
const app = express();
const fs = require('fs');
var Tesseract = require('tesseract.js');

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT | 5000;

var Storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, __dirname + '/images');
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
});

var upload = multer({
    storage: Storage
}).array('image', 3);

app.post('/', (req, res) => {

});

app.post('/upload', (req, res) => {
    console.log(req.file);
    upload(req, res, err => {
        if (err) {
            console.log(err);
            return res.send("something went wrong");
        }
        return res.send(req.file.originalname);
    });
});

var image = fs.readFileSync(__dirname + '/public/images/cv.jpg', { encoding: null });


app.get('/showdata', (req, res) => {
    Tesseract.recognize(image).then(result => {
        res.send(result.data.text);
    })
        .catch(function (err) {
            console.error(err);
        });
});

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});