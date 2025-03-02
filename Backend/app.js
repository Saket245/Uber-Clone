const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookiesParser = require("cookie-parser");
const dbConnect = require ("./db/db");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");

dbConnect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookiesParser());

app.get("/",(req,resp)=>{
    resp.send("hello world");
})

app.use("/users",userRoutes);
app.use("/captains",captainRoutes);

module.exports = app;