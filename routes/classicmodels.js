var express = require("express");
var router = express.Router();

const mysql = require("mysql2");

/* GET users listing. */
router.get("/products", function (req, res, next) {
  req.app.locals.con.connect((err) => {
    if (err) {
      console.log(err);
    }

    let sql = `SELECT * FROM products`;

    req.app.locals.con.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result);
    });
  });
});

router.get("/contact", (req, res) => {
  req.app.locals.con.connect((err) => {
    if (err) {
      console.log(err);
    }

    let sql = `SELECT * FROM offices`;

    req.app.locals.con.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result);
    });
  });
});

router.get("/employees", (req, res) => {
  req.app.locals.con.connect((err) => {
    if (err) {
      console.log(err);
    }

    let sql = `SELECT * FROM employees`;

    req.app.locals.con.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result);
    });
  });
});

module.exports = router;
