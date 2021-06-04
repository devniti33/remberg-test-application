import requestPromise from "request-promise";
import { Name, Selection } from "../app/db/models";

function generateNamesObjects() {
  const randomURL =
    "https://randomuser.me/api/?results=1000&inc=name&nat=us,gb";
  let options = {
    url: randomURL,
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    json: true,
  };

  return requestPromise(options);
}

function insertMany(names) {
  return new Promise((resolve, reject) => {
    Name.deleteMany({})
      .then(() => {
        return Name.insertMany(names);
      })
      .then(() => {
        return Selection.deleteMany({});
      })
      .then(() => {
        resolve(true);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function initApplicationDb() {
  generateNamesObjects()
    .then(({ results }) => {
      insertMany(results.map((result) => result.name));
    })
    .catch((error) => {
      throw error;
    });
}

export default initApplicationDb;
