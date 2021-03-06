import config from "../config/app";
import * as express from "./express";
import logger from "./logger";

const start = async () => {
  const port = config.get("port");
  const appStartMessage = () => {
    const env = process.env.NODE_ENV;
    logger.debug("Initializing Backend");
    logger.info(`Server Name : ${config.get("app.name")}`);
    logger.info(`Environment  : ${env || "development"}`);
    logger.info(`App Port : ${port}`);
    logger.info(`Process Id : ${process.pid}`);
  };
  const app = express.init();

  app.listen(port, appStartMessage);
};

export default start;
