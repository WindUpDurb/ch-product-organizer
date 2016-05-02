"use strict";

const PORT = process.env.PORT || 3000;

var express = require("express");
var http = require("http");
var morgan = require("morgan");
var bodyParser = require("body-parser");

var app = express();

app.use(express.static("/home/david/Temporary_Code/May-2-CH-Test/public"));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use("/", require("./routes/index"));



app.listen(PORT, function (error) {
   console.log(error || `Server listening on port ${PORT}`);
});

