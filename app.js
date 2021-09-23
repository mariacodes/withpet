//Require packages
const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");

//ejs set up
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("home");
  });



//Connect to local host
app.listen(3000, function() {
    console.log("Successfully connected to localhost");
  });