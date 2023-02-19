const { Router } = require("express");
const homepageRoute = require("./02homepage");
const gpioTrigger = require("./03gpioTrigger");
const gpioIsDisabled = require("./04gpioIsDisabled");

// api router
// start with /api
const routes = Router();

routes.get("/", homepageRoute);

routes.get("/gpio/trigger/:actionId", gpioTrigger);
routes.get("/gpio/is-disabled/:actionId", gpioIsDisabled);

module.exports = routes