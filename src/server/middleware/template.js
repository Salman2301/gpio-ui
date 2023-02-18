function template(req, res, next) {
  res.locals.send = (data) => {
    const toReturn = {
      message: data,
      statusCode: res.statusCode,
    };
    const isError = res.statusCode < 200 || res.statusCode > 299;
    if (isError) {
      toReturn.isError = true;
      toReturn.errorMessage = "Something went wrong";
    }
    res.status(res.statusCode).send(toReturn);
  };
  next();
}

module.exports = template;
