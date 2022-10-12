const express = require("express");

const router = express.Router();

const homeController= require('../../controllers/api/home_controller');

router.get('/getData', homeController.allData);

module.exports = router;