import express from "express";
import { namesRouter } from "./names.router";
import { selectionRouter } from "./selection.router";

const router = express.Router();
const NAMESPACE = "v1";

// Names API
router.use(`/${NAMESPACE}/names`, namesRouter);

// Selection API
router.use(`/${NAMESPACE}/selection`, selectionRouter);

export default router;
