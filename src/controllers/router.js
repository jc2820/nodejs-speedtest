const express = require("express");
const router = express.Router();

const speedtest = require("./testSpeed");
const getData = require("./getData")

router.get("/", getData.getTests);
router.get("/speedtest", speedtest.doSpeedtest);
router.get("/lessten", getData.lessTen);
router.get("/lesstwenty", getData.lessTwenty);

// Basic error handling - these can be updated to render views.
router.use(function (error, req, res, next) {
  console.error(error);
  const status = error.status || 500;
  res.status(status).render("error", { err: status })
});

router.use(function (req, res, next) {
  res.status(404).render("error", { err: 404 });
});

module.exports = router;
