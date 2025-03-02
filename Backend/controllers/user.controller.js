const userModel = require("../Models/userModel");
const userService = require("../services/user.service");
const {validationResult} = require("express-validator");
const blacklistTokenModel = require("../Models/blacklistToken.model");

module.exports.registerUser = (async (req,resp,next)=>{
  const errors = validationResult(req);

  if(!errors.isEmpty()){
    return resp.status(400).json({errors: errors.array()});
  }

  const {fullname, email, password} = req.body;

  const hashedPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({firstname : fullname.firstname, lastname : fullname.lastname, email, password:hashedPassword});

  const token = user.generateAuthtoken();

  resp.status(201).json({token,user});

});

module.exports.loginUser = (async (req,resp,next)=>{
  const errors = validationResult(req);

  if(!errors.isEmpty()){
    return resp.status(400).json({errors: errors.array()});
  }

  const {email, password} = req.body;

  const user = await userModel.findOne({email}).select('+password');

  if(!user){
    return resp.status(401).json({message: 'Invalid email or password'});
  }

  const isMatch = await user.comparePassword(password);

  if(!isMatch){
    return resp.status(401).json({message: 'Invalid email or password'});
  }

  const token = user.generateAuthtoken();

  resp.cookie('token',token);

  resp.status(200).json({token,user});
});

module.exports.getProfile = (async (req,resp,next)=>{
 resp.status(200).json(req.user);
});

module.exports.logoutUser = (async (req,resp,next)=>{
  resp.clearCookie('token');
  const token = req.cookies.token || req.headers.authorization.split(' ')[1];

  await blacklistTokenModel.create({token});

  resp.status(200).json({message: 'Logged out successfully'});
});