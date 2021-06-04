"use strict";

const Mongoose = require("mongoose");
const env = process.env.NODE_ENV || "development";
const config = require("../../config/database")[env];
const db = {};

const initDatabase = () => {
  let mongoose;
  const mongooseOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };
  mongoose = Mongoose.connect(config.dbURL, mongooseOptions);
  return mongoose;
};

db.Mongoose = Mongoose;
db.initDatabase = initDatabase;

module.exports = db;
