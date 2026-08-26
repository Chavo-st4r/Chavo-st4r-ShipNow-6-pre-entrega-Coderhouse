import { ProductRepository } from "../repositories/product.repository.js";
import { NotFoundError } from "../errors/NotFoundError.js";
import { ValidationError } from "../errors/ValidationError.js";
import { PRODUCT_STATUS } from "../constants/index.js";

const repo = new ProductRepository();

export class ProductService {
  async listAvailable() {
    const products = await repo.getAll();
    if (!products || products.length === 0) {
      throw new NotFoundError("No hay productos disponibles");
    }

    return products.filter(p => p.status === PRODUCT_STATUS.AVAILABLE);
  }

  async addProduct(data) {
    if (!data.name || !data.price) {
      throw new ValidationError("El producto debe tener nombre y precio");
    }

    if (data.status && !Object.values(PRODUCT_STATUS).includes(data.status)) {
      throw new ValidationError("Estado de producto inválido");
    }

    return await repo.create(data);
  }
}
