const express = require('express');
const app = express();
const path = require('path');
const vodyParser = require('body-parser');
const mongoose = require('mongoose');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//connectint to database with mongoose
mongoose.connect('mongodb://localhost:27017/systemdb')
    .catch((err) => {
        console.log('Cannot connect to the database!', err);
        process.exit();
    });



app.get("/api", (req, res) => {

    res.json({ "users": ["userOne", "userTwo", "userThree", "userFour"] });

});

app.listen(5001, () => console.log("Server started on port 5001"));