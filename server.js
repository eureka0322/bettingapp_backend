require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const betevoRoutes = require("./routes/betevoRoutes");
const https = require('https');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", betevoRoutes);




mongoose
  .connect("mongodb+srv://livedream0322:helloworld@cluster0.u7lyd63.mongodb.net/betting_db?retryWrites=true&w=majority")
  .then(() => {
    https
    .createServer(
      // Provide the private and public key to the server by reading each
      // file's content with the readFileSync() method.
      {
        key: fs.readFileSync("key.pem"),
        cert: fs.readFileSync("cert.pem"),
      },
      app
    )
    .listen(443, () => {
      console.log("serever is runing at port 443");
    });
  })
  .catch((error) => {
    console.log("error occured", error);
  });
