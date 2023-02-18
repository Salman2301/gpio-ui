const ctrl = require("../../controller/index");

module.exports = async function (req, res) {
  (await ctrl).openGate();
  res.locals.send("Opening gate");
};
