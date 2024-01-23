const router = require("express").Router();
const {
  getDoctors,
} = require("../controllers/doctors.controllers");

router.get("/", getDoctors);


module.exports = router;
