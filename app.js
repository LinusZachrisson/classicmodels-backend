var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mysql = require("mysql2");
const cors = require("cors");

var indexRouter = require("./routes/index");
var classicmodelsRouter = require("./routes/classicmodels");

var app = express();
app.use(cors());

app.locals.con = mysql.createConnection({
  host: "localhost",
  port: "3307",
  user: "classicmodels",
  password: "classicmodels123",
  database: "classicmodels",
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/classicmodels", classicmodelsRouter);

module.exports = app;
