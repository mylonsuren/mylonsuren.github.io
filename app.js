var express = require('express');
var app = express(); // declares express app
var port = process.env.PORT || 4000; //sets the port to listen on

//serves the static files
// app.use(express.static('/style'));
app.use("/style", express.static(__dirname + '/style'));
// app.use(express.static('/script'));
app.use("/script", express.static(__dirname + '/script'));
// CSMApp.use(express.static('./images'));
// CSMApp.use(express.static('./views/templates'));
app.use(express.static('/node_modules'));
app.use("/node_modules", express.static(__dirname + '/node_modules'));
// CSMApp.use(express.static('./script/Geo_Overview/lib/styles/'));

/*
=====================================================
	ROUTES
=====================================================
*/

// CSMApp.get('/favicon.ico', function(req, res) {
// 	res.sendFile(__dirname + '/favicon.ico');
// });


//pages
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/mainpage.html');
});

//start server
app.listen(port, function() {
	console.log("Now listening on port " + port);
});
