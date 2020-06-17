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

};