import { ProductRepository } from "../repositories/product.repository.js";

const repo = new ProductRepository();

export class ProductService {
  async listAvailable() {
    const products = await repo.getAll();
    return products.filter(p => p.status === "AVAILABLE");
  }

  async addProduct(data) {
    return repo.create(data);
  }
}
