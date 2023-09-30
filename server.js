require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const betevoRoutes = require("./routes/betevoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", betevoRoutes);

mongoose
  .connect("mongodb+srv://livedream0322:helloworld@cluster0.u7lyd63.mongodb.net/betting_db?retryWrites=true&w=majority")
  .then(() => {
    app.listen(443, () => {
      console.log("connected to db & listening on port", 443);
    });
  })
  .catch((error) => {
    console.log("error occured", error);
  });
