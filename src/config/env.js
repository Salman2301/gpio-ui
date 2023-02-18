require('dotenv').config()

let {
  PORT = 3543,
  HOST = "localhost",
  MOCK_ARRAY_GPIO
} = process.env;

// @ts-expect-error
MOCK_ARRAY_GPIO = MOCK_ARRAY_GPIO === "true";

module.exports = { HOST, PORT, MOCK_ARRAY_GPIO };

