import { Product } from "../models/Product.js";

export class ProductRepository {
  async getAll() {
    return Product.find({}).select("name price status");
  }

  async create(data) {
    return Product.create(data);
  }
}
