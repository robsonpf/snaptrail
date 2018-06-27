const express = require("express");
const app = express();
const port = process.env.PORT || 8082
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

app.disable("x-powered-by");

if (process.env.NODE_ENV !== "test") app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(cors());



app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ error: err })
});

app.use((req, res, next) => {
  res.status(404).json({ error: { message: "Not Found" } });
});

app.listen(port, () => {
  console.log(`Server start on port ${port}`);
});

module.exports = app
