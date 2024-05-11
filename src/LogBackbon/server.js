const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
// this will pars the data into json / json format
app.use(express.json());

// 3. let's create our database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

// 2. let's create our post request or write our APIs
app.post("/signup", (req, res) => {
  const sql = "INSERT INTO login (name, email, password) VALUES (?, ?, ?)"; //we used questionmarks to insert the values directly in the apprentices table.

  // now we call our query, and pass the sql and values as parameters. we assign our values to an array

  const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE email = ? AND password = ?";

  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }

    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Invalid");
    }
  });
});

// 1. let's set our port number

app.listen(8081, () => {
  console.log("Listening to Server 8081");
});
