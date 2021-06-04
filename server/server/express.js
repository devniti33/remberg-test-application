import express from "express";
import bodyParser from "body-parser";
import expressBoom from "express-boom";
import cors from "cors";

import initRoutes from "../routes";
import db from "../app/db";
import logger from "./logger";
import http from "http";
import initApplicationDb from "../lib/init-application-db";

// Initialize express app
const app = express();

const server = http.createServer(app);

function initMiddleware() {
  // Showing stack errors
  app.set("showStackError", true);

  app.use(cors());

  app.use(expressBoom());

  // Request body parsing middleware
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  app.use(bodyParser.json({ limit: "1000mb" }));
}

function initDatabase() {
  db.initDatabase()
    .then(function () {
      logger.info("You are connected to the database successfully.");
      initApplicationDb();
    })
    .catch(function (error) {
      logger.error("An Error occured while connecting to mongo");
      throw error;
    });
}

export function init() {
  // Initialize Express middleware
  initMiddleware();

  // Initialize modules server routes
  initRoutes(app);

  // Initialize db
  initDatabase();

  return server;
}
