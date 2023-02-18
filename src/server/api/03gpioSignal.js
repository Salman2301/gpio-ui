const ctrl = require("../../controller/index");

module.exports = async function (req, res) {
  res.locals.send((await ctrl).signal(req.params.pinIn));
};
