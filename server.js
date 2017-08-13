'use strict';
// require('dotenv').config({silent: true});
/*
* All the required node packages
*/
const express 	= require('express'),
	app 		= express(),
	path 		= require('path'),
	http 		= require('http').Server(app);


/*
* Serving static files in Express using express static middleware
* these files will be access publicly
*/
app.use(express.static(path.resolve('./build')));

app.get(/^((?!\/(api)).)*$/, function (req, res) {
	res.sendFile(path.resolve('./build/index.html'));
});



http.listen(8082, () => {
    console.log(`Listening on server port:8082`);
});


// Todos
// Enable CSRF protection

/*
* we need app package for tests so we are exporting this for our tests
*/
module.exports = app;