const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require('multer');
const helmet = require('helmet');

var upload = multer();
const app = express();
// app.use(helmet());

app.use(cors());
var corsOptions = {
    origin: "https://deeflow.com"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));

// database
const db = require("./app/models");
const Role = db.role;

// with existing tables
db.sequelize.sync();


// force: true will drop the table if it already exists

// db.sequelize.sync({ force: true }).then(() => {
//     console.log('Drop and Resync Database with { force: true }');
//     initial();
// });

// simple route
app.get("/api", (req, res) => {
    res.json({ message: "Welcome to deeflow" });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/chatbits.routes')(app);
require('./app/routes/classroom.routes')(app);
require('./app/routes/store.routes')(app);
require('./app/routes/blog.routes')(app);
require('./app/routes/quizy.routes')(app);
require('./app/routes/qlake.routes')(app);
require('./app/routes/cloudy.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 5432;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

function initial() {
    Role.create({
        id: 1,
        name: "User"
    });

    Role.create({
        id: 2,
        name: "Moderator"
    });

    Role.create({
        id: 3,
        name: "Admin"
    });
}