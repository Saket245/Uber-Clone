const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require ("./db/db");
const userRoutes = require("./routes/user.routes");

dbConnect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,resp)=>{
    resp.send("hello world");
})

app.use("/users",userRoutes);

module.exports = app;