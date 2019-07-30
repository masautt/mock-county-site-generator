//Want to get a random county? just add /county/random to the URL

//https://btybv.sse.codesandbox.io/county/123

const websiteData = require("./static/websiteData");
const mainHelp = require("./helpers/main");
const express = require("express");
const app = express();
const expbs = require("express-handlebars");

const VARIATIONS = 1000000;
const VARIATIONS_SIZE = VARIATIONS.toString().length-1;

const hbs = expbs.create({
  defaultLayout: __dirname + "/views/layouts/index",
  partialsDir: __dirname + "/views/partials",
  helpers: mainHelp
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render(__dirname + "/views/infoPage", {
    redirectPage: "home"
  });
});

app.get("/home", (req, res) => {
  let myId = (req.query.id === undefined) 
    ?  Math.floor(Math.random() * VARIATIONS).toString().padStart(VARIATIONS_SIZE, '0')
    : req.query.id;
  res.render(__dirname + "/views/homePage", {
    data: websiteData,
    id: myId,
    title: `Mock County ${myId}`,
    redirectPage: "home"
  });
});

app.get("/search", (req, res) => {
  let myId = (req.query.id === undefined) 
    ?  Math.floor(Math.random() * VARIATIONS).toString().padStart(VARIATIONS_SIZE, '0')
    : req.query.id
  res.render(__dirname + "/views/searchPage", {
    data: websiteData,
    id: myId,
    title: `Mock County ${myId}`,
    redirectPage: "search"
  });
});

app.get("/data", (req, res) => {
  let myId = (req.query.id === undefined) 
    ?  Math.floor(Math.random() * VARIATIONS).toString().padStart(VARIATIONS_SIZE, '0')
    : req.query.id
  res.render(__dirname + "/views/dataPage", {
    data: websiteData,
    id: myId,
    title: `Mock County ${myId}`,
    redirectPage: "data"
  });
});

app.get("/contact", (req, res) => {
  res.render(__dirname + "/views/wrongPage", {
    page: "contact",
    redirectPage: "home"
  });
});

app.get("/calendar", (req, res) => {
  res.render(__dirname + "/views/wrongPage", {
    page: "calendar",
    redirectPage: "home"
  });
});

app.get("/reports", (req, res) => {
  res.render(__dirname + "/views/wrongPage", {
    page: "reports",
    redirectPage: "home"
  });
});

app.get("/questions", (req, res) => {
  res.render(__dirname + "/views/wrongPage", {
    page: "questions",
    redirectPage: "home"
  });
});

app.get("/map", (req, res) => {
  res.render(__dirname + "/views/wrongPage", {
    page: "map",
    redirectPage: "home"
  });
});


app.listen(8080, () => {
  console.log("Server started at ", 8080);
});
