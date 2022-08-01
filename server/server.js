const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("../db/dbconnection.js");

const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.json());

app.get("/getideas", (req, res) => {
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    const sql = `SELECT * FROM chal_table`;
    connection.query(sql, function(err, result) {
      if (err) throw err;
      let achivFilter = result.filter((stat) => stat.status == 1);
      let ideasFilter = result.filter((stat) => stat.status == null);
      res.json({ achivFilter, ideasFilter });
    });
  });
});
app.post("/postideas", (req, res) => {
  res.send(req.body);

  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    req.body.forEach((element) => {
      const sql = `REPLACE INTO chal_table (activity, \`key\`, type,  date, status) VALUES ("${
        element.activity
      }", ${element.key}, "${element.type}", "${element.date ??
        null}" , ${element.status ?? null})`;
      connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("record inserted");
      });
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
