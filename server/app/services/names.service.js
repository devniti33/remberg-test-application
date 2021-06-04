import { Name } from "../db/models";

export default class NamesService {
  static async getNames(query) {
    const page = parseInt(query.page || 1, 10);
    let limit = parseInt(query.limit, 10);

    let skip = (page - 1) * limit;

    const sortBy = {
      first: 1,
      last: 1,
    };

    const totalDataSize = await Name.countDocuments({});
    if (totalDataSize < limit) {
      limit = 0;
      skip = 0;
    }

    const data = await Name.find({}).limit(limit).sort(sortBy).skip(skip);
    const result = {
      data,
      count: totalDataSize,
    };

    return result;
  }
}
