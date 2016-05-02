"use strict";

var express = require('express');
var router = express.Router();


router.get("/", function(request, response) {
       response.sendFile("/home/david/Temporary_Code/May-2-CH-Test/views/index.html");
    });

module.exports = router;