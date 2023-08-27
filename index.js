const express = require("express");

const app = express();

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://0.0.0.0:/student", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected..");
  })
  .catch((e) => {
    console.log(e);
  });

const root = require("./route");
app.use(root);

app.listen(6000, () => {
  console.log("Server is Running..");
});
