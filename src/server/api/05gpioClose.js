const ctrl = require("../../controller/index");

module.exports = async function (req, res) {
  (await ctrl).closeGate();
  res.locals.send("Closing gate");
};
