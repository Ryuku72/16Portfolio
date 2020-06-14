// NPM Packages
const chalk = require("chalk")
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
//const passport = require("./config/passport");

// Port
const PORT = process.env.PORT || 8080;

// Set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Passport
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());


//Requiring our routes
require("./routes/html-routes.js")(app)
//require("./routes/api-routes.js")



//sequelize and listener
//db.sequelize.sync({force:false}).then(function() {
    app.listen(PORT, function () {
        console.log(
          chalk.bold.blue("Listening on port %s. 🌎"),
          chalk.bold.yellow(PORT) +
            chalk.bold.green("\nVisit ") +
            chalk.bold.blue("http://localhost:") +
            chalk.bold.yellow(PORT) +
            chalk.bold.blue("/") +
            chalk.bold.green(" in your browser")
        );
      });
 //});