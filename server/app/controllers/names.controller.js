import Responder from "../../server/expressResponder";
import NamesService from "../services/names.service";

export default class NamesController {
  static async fetch(req, res) {
    try {
      const { data, count } = await NamesService.getNames(req.query);
      Responder.success(res, {
        success: true,
        message: "Names fetched successfully",
        names: data,
        count: count || 0,
      });
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}
