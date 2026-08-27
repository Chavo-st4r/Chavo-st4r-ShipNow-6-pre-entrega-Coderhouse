import chai from "chai";
import request from "supertest";
import app from "../../src/app.js";

const expect = chai.expect;

describe("Users API", () => {
  it("GET /api/users debe devolver lista de usuarios", async () => {
    const res = await request(app).get("/api/users");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  it("POST /api/users con datos válidos debe crear usuario", async () => {
    const res = await request(app)
      .post("/api/users")
      .send({ nombre: "Test User", email: "test@test.com", rol: "cliente" });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property("_id");
    expect(res.body).to.have.property("email", "test@test.com");
  });

  it("POST /api/users con datos incompletos debe dar error", async () => {
    const res = await request(app).post("/api/users").send({});
    expect(res.status).to.equal(400);
    expect(res.body).to.have.property("error");
  });
});
