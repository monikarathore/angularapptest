var express = require('express');
var app = express();
app.use(express.static(__dirname + "/public"));
app.listen(2000);
console.log("Server is running on port 2000");