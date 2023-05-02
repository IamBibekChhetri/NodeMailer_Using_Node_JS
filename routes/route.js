const router = require("express").Router();

const { signup, getbill } = require("../controller/appController.js");

// HTTP Reqest

router.post("/user/signup", signup);
router.post("/product/getbill", getbill);

module.exports = router;
