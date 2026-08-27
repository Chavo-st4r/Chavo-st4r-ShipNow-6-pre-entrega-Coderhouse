import chai from "chai";
import request from "supertest";
import app from "../../src/app.js";

const expect = chai.expect;

describe("Logger API", () => {
  it("GET /api/logger/test debe disparar logs", async () => {
    const res = await request(app).get("/api/logger/test");
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("message");
  });
});
