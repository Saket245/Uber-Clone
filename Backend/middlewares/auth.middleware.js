const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.authUser= (async (req,resp,next)=>{
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    if(!token){
        return resp.status(401).json({message: 'Unauthorized'});
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        req.user = user;
        return next();
    }
    catch(err){
        return resp.status(401).json({message: 'Unauthorized'});
    }
});