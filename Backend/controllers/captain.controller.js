const captainModel = require("../Models/captain.model");  
const blacklistTokenModel = require("../Models/blacklistToken.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");

module.exports.registerCaptain = async (req, resp, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return resp.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;

  const isCaptainAlreadyExist = await captainModel.findOne({email});

  if(isCaptainAlreadyExist){
    return resp.status(400).json({message:'Captain already exist'});
  }

  const hashPassword = await captainModel.hashPassword(password);

  const captain = await captainService.creatCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = captain.generateAuthtoken();

  resp.status(201).json({token,captain});
};

module.exports.loginCaptain = async (req, resp, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return resp.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const captain = await captainModel.findOne({ email }).select("+password");

  if (!captain) {
    return resp.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await captain.comparePassword(password);

  if (!isMatch) {
    return resp.status(401).json({ message: "Invalid email or password" });
  }

  const token = captain.generateAuthtoken();

  resp.cookie("token", token);

  resp.status(200).json({ token, captain });
}

module.exports.getProfile = async (req, resp, next) => {
  resp.status(200).json(req.captain);
}

module.exports.logoutCaptain = async (req, resp, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  await blacklistTokenModel.create({ token });

  resp.clearCookie("token");

  resp.status(200).json({ message: "Logout successfully" });
}