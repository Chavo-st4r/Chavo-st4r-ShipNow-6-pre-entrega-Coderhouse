import chai from "chai";
import request from "supertest";
import app from "../../src/app.js";

const expect = chai.expect;

describe("Products API", () => {
  it("GET /api/products debe devolver lista de productos", async () => {
    const res = await request(app).get("/api/products");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  it("POST /api/products con datos válidos debe crear producto", async () => {
    const res = await request(app)
      .post("/api/products")
      .send({ nombre: "Producto Test", descripcion: "Desc", precio: 100, stock: 10 });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property("_id");
    expect(res.body).to.have.property("nombre", "Producto Test");
  });

  it("GET /api/products/:id con ID inexistente debe devolver 404", async () => {
    const res = await request(app).get("/api/products/64f000000000000000000000");
    expect(res.status).to.equal(404);
    expect(res.body).to.have.property("error");
  });
});
