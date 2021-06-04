import express from "express";
import namesController from "../../../app/controllers/names.controller";

const args = { mergeParams: true };
const namesRouter = express.Router(args);

namesRouter.route("/").get(namesController.fetch);

export { namesRouter };
