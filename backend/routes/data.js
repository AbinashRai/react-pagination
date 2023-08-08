const express = require("express");
const router = express.Router();
const { getAllData, getAllDataTesting } = require("../controllers/data");

router.route("/array").get(getAllData);
router.route("/testing").get(getAllDataTesting);

module.exports = router;
