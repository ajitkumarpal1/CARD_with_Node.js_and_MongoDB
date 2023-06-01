var express = require('express');
var server = express();

var routes = require('./routes/routes')
var mongoose = require('mongoose');
const cors = require('cors')
var checkDB;

mongoose.connect("mongodb://0.0.0.0:27017/newDB", { useNewUrlParser: true, useUnifiedTopology: true }).then(
    checkDB = () => {
        console.log("DB connected");
    }).catch((err) => {
        console.log("Error connecting to DB: " + err);
    });

/* mongodb://localhost:27017 */


server.use(cors());
server.use(express.json());
console.log("A1");

server.use(routes);

server.listen(8000, (error) => {
    if (error) {
        console.log("Error starting server: " + error);
    } else {
        console.log("Server started on port 8000");
    }
});
