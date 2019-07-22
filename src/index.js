const websiteData = require("./static/websiteData");
const myHelpers = require("./static/myHelpers");
const express = require("express");
const app = express();
const expbs = require("express-handlebars");

const hbs = expbs.create({
  defaultLayout: __dirname + "/views/layouts/index",
  partialsDir: __dirname + "/views/partials",
  helpers: myHelpers
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.get("/:id", (req, res) => {
  res.render(__dirname + "/views/home", {
    data: websiteData,
    id: req.params.id
  });
});

app.get("/rand", (req, res) => {
  let randId = (Math.floor(Math.random() * 1000)).toString();
  randId = randId.toString().padStart(3, '0');

  console.log(randId);
  res.render(__dirname + "/views/home", {
    data: websiteData,
    id: 100
  });
});

app.listen(8080, () => {
  console.log("Server started at ", 8080);
});
