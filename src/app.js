require('dotenv').config()
const express = require("express");
const router = require("./controllers/router");

const cron = require("node-cron");
const speedtest = require("./controllers/testSpeed")

const path = require("path");
const helmet = require("helmet");
const favicon = require("serve-favicon");

const app = express();

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(helmet());
app.use(favicon(path.join(__dirname, "..", "public", "img", "stopwatch.png")));
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Forwards requests to the router
app.use(router);

// Schedule Speedtests.
cron.schedule('0,5,10,15,20,25,30,35,40,45,50,55 * * * *', () => {
    speedtest.doSpeedtest();
  });

module.exports = app;
