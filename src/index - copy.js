const websiteData = require("./static/websiteData");
const express = require("express");
const app = express();
const expbs = require("express-handlebars");

app.engine(
  "handlebars",
  expbs({
    defaultLayout: __dirname + "/views/layouts/index",
    partialsDir: __dirname + "/views/partials"
  })
);
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  let iconsArray =
    websiteData.icons[Math.floor(Math.random() * websiteData.icons.length)];
  let iconTitlesArray =
    websiteData.iconTitles[
      Math.floor(Math.random() * websiteData.iconTitles.length)
    ];
  let iconsObjectArray = [];

  for (let i = 0; i < iconsArray.length; i++) {
    iconsObjectArray.push({
      icon: iconsArray[i],
      iconText: iconTitlesArray[i]
    });
  }

  res.render(__dirname + "/views/home", {
    appraisalInfo:
      websiteData.records[
        Math.floor(Math.random() * websiteData.records.length)
      ],
    icons: iconsObjectArray
  });

  iconsObjectArray = [];
});

app.listen(8080, () => {
  console.log("Server started at ", 8080);
});
