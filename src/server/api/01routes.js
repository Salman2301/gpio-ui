const { Router } = require("express");
const homepageRoute = require("./02homepage");
const gpioSignalRoute = require("./03gpioSignal");
const gpioCheckRoute = require("./04gpioCheck");

// api router
// start with /api
const routes = Router();

routes.get("/", homepageRoute);

routes.get("/gpio/signal/:pinIn", gpioSignalRoute);
routes.get("/gpio/check/:pinOut", gpioCheckRoute);



module.exports = routes