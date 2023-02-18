const ctrl = require("../../controller/index");

module.exports = async function (req, res) {
  const state = (await ctrl).check(req.params.pinOut);
  res.locals.send({
    state
  });
};
