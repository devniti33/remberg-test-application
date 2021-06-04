const convict = require("convict");
require("dotenv").config();

const config = convict({
  app: {
    name: {
      doc: "Remberg BE App",
      format: String,
      default: "Remberg BE App",
    },
  },
  env: {
    doc: "The application environment.",
    format: ["production", "development", "staging", "test"],
    default: "development",
    env: "NODE_ENV",
  },
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 4000,
    env: "PORT",
  },
  log_level: {
    doc: "level of logs to show",
    format: String,
    default: "debug",
    env: "LOG_LEVEL",
  },
  mongoose: {
    dbURL: {
      default: "mongodb://localhost:27017/remberg",
      env: "DB_URL",
    },
  },
});
config.validate({ allowed: "strict" });

module.exports = config;
