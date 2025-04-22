const express = require('express');
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const getCoordinates = require("../controllers/map.controller").getCoordinates;
const {query} = require("express-validator");

router.get("/getCoordinates",
    query('address').isString().isLength({min : 3}).withMessage('Address is required'),
    authMiddleware.authUser,getCoordinates);

module.exports = router;