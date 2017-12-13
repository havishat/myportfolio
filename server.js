//setting express
const express = require("express");
const app = express();
const path = require("path");

//parse data
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); //return json the client

//we make the connection with angular: front-end and back end
app.use(express.static(path.join(__dirname, "./angular/dist")));

// require the mongoose configuration file which does the rest for us
// require('./server/config/mongoose.js');


// store the function in a variable this will run first
// var routes_setter = require('./server/config/routes.js');
// // invoke the function stored in routes_setter and pass it the "app" variable
// routes_setter(app);


// Tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})