const { HOST, PORT, MOCK_ARRAY_GPIO } = require("../config/env");
const express = require('express');
const loggerMiddleware = require("../service/middleware/logger");
const templateMiddleware = require("../service/middleware/template");
const apiRoutes = require("./api/01routes");
const setting = require("../config/setting");
const helmet = require("helmet");
const path = require('path');



const app = express();

app.use(
  // @ts-expect-error // FIX: Not sure why it throws error
  helmet({
    contentSecurityPolicy: false
  })
);
app.use(loggerMiddleware);
app.use(templateMiddleware);

// homepage
app.set('views', path.join(__dirname,'./public'));
app.set('view engine', 'pug')
app.get('/', (req, res) => {
  res.render('./index', { ...setting, env: { MOCK_ARRAY_GPIO } })
});

// Api routes
app.use("/api", apiRoutes);


app.listen(PORT, () => {
  console.log(`Running server listening on http://${HOST}:${PORT}`)
})

