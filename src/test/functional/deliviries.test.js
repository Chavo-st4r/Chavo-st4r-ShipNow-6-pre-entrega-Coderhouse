import chai from "chai";
import request from "supertest";
import app from "../../src/app.js";

const expect = chai.expect;

describe("Deliveries API", () => {
  it("GET /api/deliveries debe devolver lista de entregas", async () => {
    const res = await request(app).get("/api/deliveries");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  it("POST /api/deliveries con datos válidos debe crear entrega", async () => {
    const res = await request(app)
      .post("/api/deliveries")
      .send({ pedidoId: "12345", repartidorId: "54321", estado: "en camino" });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property("_id");
    expect(res.body).to.have.property("estado", "en camino");
  });

  it("POST /api/deliveries con datos incompletos debe dar error", async () => {
    const res = await request(app).post("/api/deliveries").send({});
    expect(res.status).to.equal(400);
    expect(res.body).to.have.property("error");
  });
});
