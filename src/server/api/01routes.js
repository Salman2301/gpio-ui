const { Router } = require("express");
const homepageRoute = require("./02homepage");
const gpioStateRoute = require("./03gpioState");
const gpioOpenRoute = require("./04gpioOpen");
const gpioCloseRoute = require("./05gpioClose");


const routes = Router();

routes.get("/", homepageRoute);

routes.get("/gpio/state", gpioStateRoute);
routes.get("/gpio/open", gpioOpenRoute);
routes.get("/gpio/close", gpioCloseRoute);



module.exports = routes