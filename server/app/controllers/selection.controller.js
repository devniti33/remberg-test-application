import Responder from "../../server/expressResponder";
import SelectionService from "../services/selection.service";

export default class SelectionController {
  static async fetch(req, res) {
    try {
      const selections = await SelectionService.getSelections();
      Responder.success(res, {
        success: true,
        message: "Selection fetched successfully",
        selections,
      });
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  static async update(req, res) {
    try {
      const selections = await SelectionService.updateSelections(
        req.body.selections,
        req.body.all
      );
      Responder.success(res, {
        success: true,
        message: "Selection updated successfully",
        selections,
      });
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}
