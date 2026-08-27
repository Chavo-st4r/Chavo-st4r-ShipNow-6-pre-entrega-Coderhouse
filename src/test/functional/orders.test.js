import chai from "chai";
import request from "supertest";
import app from "../../src/app.js";

const expect = chai.expect;

describe("Orders API", () => {
  it("GET /api/orders debe devolver lista de pedidos", async () => {
    const res = await request(app).get("/api/orders");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  it("POST /api/orders con datos válidos debe crear pedido", async () => {
    const res = await request(app)
      .post("/api/orders")
      .send({ clienteId: "12345", estado: "pendiente", prioridad: "alta" });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property("_id");
    expect(res.body).to.have.property("estado", "pendiente");
  });

  it("GET /api/orders/:id con ID inexistente debe devolver 404", async () => {
    const res = await request(app).get("/api/orders/64f000000000000000000000");
    expect(res.status).to.equal(404);
    expect(res.body).to.have.property("error");
  });
});
