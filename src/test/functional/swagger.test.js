import chai from "chai";
import request from "supertest";
import app from "../../src/app.js";

const expect = chai.expect;

describe("Swagger Docs", () => {
  it("GET /api/docs debe responder correctamente", async () => {
    const res = await request(app).get("/api/docs");
    expect(res.status).to.equal(200);
  });
});
