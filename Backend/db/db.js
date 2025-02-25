const mongoose = require("mongoose");

const dbConnect = ()=>{
    mongoose.connect(process.env.DB_CONNECT).then(()=>{
        console.log("db connected successfully");
    }).catch((err)=>{
        console.log(err);
    })
};

module.exports = dbConnect;