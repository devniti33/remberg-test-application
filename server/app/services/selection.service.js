import { ObjectId } from "mongodb";
import { Selection, Name } from "../db/models";

export default class SelectionService {
  static async getSelections() {
    const result = await Selection.find({});
    return result;
  }
  static async updateSelections(data = [], all) {
    if (all) {
      const names = await Name.find({});
      data = names.map((name) => name._id);
    }
    await Selection.deleteMany({});
    const result = await Selection.insertMany(
      data.map((id) => ({ name_id: new ObjectId(id) }))
    );
    return result;
  }
}
