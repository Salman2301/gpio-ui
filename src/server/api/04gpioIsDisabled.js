const ctrl = require("../../controller/index");

module.exports = async function (req, res) {
  const isDisabled = (await ctrl).isDisabled(req.params.actionId);
  res.locals.send({
    isDisabled
  });
};
