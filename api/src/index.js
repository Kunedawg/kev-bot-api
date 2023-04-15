const express = require("express");
require("dotenv").config();

const app = express();

app.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

app.use("/request-type", (req, res, next) => {
  console.log("Request type: ", req.method);
  next();
});

app.get("/", (req, res) => {
  res.send("Successful response.");
});

let server = app.listen(process.env.PORT, process.env.ADDRESS, () =>
  console.log(`API is listening on ${server.address().address}:${server.address().port}.`)
);
