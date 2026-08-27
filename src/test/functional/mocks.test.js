import chai from "chai";
import request from "supertest";
import app from "../../src/app.js";

const expect = chai.expect;

describe("Mocks API", () => {
  it("GET /api/mocks/users debe generar usuarios falsos", async () => {
    const res = await request(app).get("/api/mocks/users");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  it("POST /api/mocks/seed/users debe insertar usuarios falsos", async () => {
    const res = await request(app).post("/api/mocks/seed/users");
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property("message");
  });

  it("GET /api/mocks/orders debe generar pedidos falsos", async () => {
    const res = await request(app).get("/api/mocks/orders");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });
});
