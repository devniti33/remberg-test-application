import express from "express";
import selectionController from "../../../app/controllers/selection.controller";

const args = { mergeParams: true };
const selectionRouter = express.Router(args);

selectionRouter
  .route("/")
  .get(selectionController.fetch)
  .put(selectionController.update);

export { selectionRouter };
