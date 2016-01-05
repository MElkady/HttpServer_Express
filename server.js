var express = require("express");
var middleware = require("./middleware.js");
var app = express();
var port = process.env.PORT || 3000;

app.use(middleware.logger);

app.get("/", function(req, res) {
	res.send("OK :)");
});

app.get("/aboutus", middleware.requireAuthentication, function(req, res) {
	res.send("About us!");
});

app.use(express.static(__dirname + "/public"));

app.listen(port, function() {
	console.log("Server up @ " + port);
});