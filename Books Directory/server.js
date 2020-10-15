const express = require("express");
const dotenv = require("dotenv");

const router = require("./routers/index");
const connectDatabase = require("./Database/connectDatabase");

dotenv.config({
    path: './config/env/config.env',
});

connectDatabase();

const app = express();

app.use(express.json());

app.use("/api", router);

app.listen(8000, () => {
  console.log("Server Started...");
});
