const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require ("./db/db");

dbConnect();

app.use(cors());

app.get("/",(req,resp)=>{
    resp.send("hello world");
})

module.exports = app;