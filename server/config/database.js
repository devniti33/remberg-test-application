const config = require("./app");

module.exports = {
  development: {
    dbURL: config.get("mongoose.dbURL"),
  },
  test: {
    dbURL: config.get("mongoose.dbURL"),
  },
  staging: {
    dbURL: config.get("mongoose.dbURL"),
  },
  production: {
    dbURL: config.get("mongoose.dbURL"),
  },
};
