const path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  // get request to index.handlebars
  app.get("/", (req, res) => {
    res.render("index");
  })

  app.get("/contact", function(req,res){
    if (req.user) {
      res.redirect("/members");
    }
    res.render("contact")
  })

  app.get("/signup", function(req, res) {

    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/mock/signup.html"));
  });

  app.get("/login", function(req, res) {
  
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/mock/login.html"));
  });

  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mock/members.html"));
  });

};