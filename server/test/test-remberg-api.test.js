import supertest from "supertest";
import * as express from "../server/express";

process.env.NODE_ENV = "test";
const app = supertest(express.init());

describe("check all the rest APIs", () => {
  it("access names API", async () => {
    let response = await app.get("/api/v1/names").send();
    expect(response.status).toBe(200);
    expect(response.body.data.success).toBeTruthy();
    expect(response.body.message).toBe("Names fetched successfully");
    expect(response.body.data.names).toBeDefined();
    expect(response.body.data.count).toBeDefined();

    response = await app.get("/api/v1/selection").send();
    expect(response.status).toBe(200);
    expect(response.body.data.selections).toBeDefined();
    expect(response.body.message).toBe("Selection fetched successfully");

    response = await app
      .put("/api/v1/selection")
      .send({ all: false, selections: [] });
    expect(response.status).toBe(200);
    expect(response.body.data.selections).toBeDefined();
    expect(response.body.message).toBe("Selection updated successfully");
  });
});
