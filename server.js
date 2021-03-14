require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;

const app = express();
const db = require("./models");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//ENABLE if you plan to use handlebars.
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//ENABLE if you plan to use controllers as routes/orm.
require("./controllers/html-routes.js")(app);

db.sequelize.sync({}).then(() => {
  app.listen(PORT, () => {
    console.log("Listening on localhost:" + PORT);
  });
});
