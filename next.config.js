/* eslint-env node */
const dotenv = require("dotenv");
const withSharo = require("@tkesgar/sharo-next");

function loadEnv() {
  dotenv.config();
  dotenv.config({ path: `${process.env.NODE_ENV}.local.env` });
  dotenv.config({ path: `${process.env.NODE_ENV}.env` });
  dotenv.config({ path: "default.env" });
}

function getAppEnvs() {
  const env = {};

  for (const [key, value] of Object.entries(process.env)) {
    if (key.startsWith("APP_")) {
      env[key] = value;
    }
  }

  return env;
}

loadEnv();

module.exports = withSharo({
  env: getAppEnvs(),
});
