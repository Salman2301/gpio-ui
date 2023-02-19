const morgan = require('morgan');

module.exports =  morgan(
  "HTTP: [:date[iso]] :method :status :response-time ms  :url for :remote-addr",
  {
    immediate: true
  }
);
