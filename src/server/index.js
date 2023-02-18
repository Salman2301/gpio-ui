const { HOST, PORT } = require("../config/env");
const express = require('express');
const loggerMiddleware = require("./middleware/logger");
const templateMiddleware = require("./middleware/template");
const apiRoutes = require("./api/01routes");
const helmet = require("helmet");
const path = require('path');



const app = express();

// @ts-expect-error // FIX: Not sure why it throws error
app.use(helmet());
app.use(loggerMiddleware);
app.use(templateMiddleware);

app.use("/", express.static(path.join(__dirname, 'public')));
app.use("/api", apiRoutes);


app.listen(PORT, () => {
  console.log(`Running server listening on http://${HOST}:${PORT}`)
})

