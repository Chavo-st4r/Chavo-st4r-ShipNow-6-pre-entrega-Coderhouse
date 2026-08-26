import { ProductRepository } from "../repositories/product.repository.js";
import { NotFoundError } from "../errors/NotFoundError.js";
import { ValidationError } from "../errors/ValidationError.js";
import { PRODUCT_STATUS } from "../constants/index.js";
import logger from "../logger/logger.js";

const repo = new ProductRepository();

export class ProductService {
  async listAvailable() {
    const products = await repo.getAll();
    if (!products || products.length === 0) {
      logger.warning("No hay productos disponibles en la base");
      throw new NotFoundError("No hay productos disponibles");
    }

    const disponibles = products.filter(p => p.status === PRODUCT_STATUS.AVAILABLE);
    logger.info(`Productos disponibles listados. Total: ${disponibles.length}`);
    return disponibles;
  }

  async addProduct(data) {
    if (!data.name || !data.price) {
      logger.warning("Intento de creación de producto sin nombre o precio");
      throw new ValidationError("El producto debe tener nombre y precio");
    }

    if (data.status && !Object.values(PRODUCT_STATUS).includes(data.status)) {
      logger.warning(`Estado inválido para producto: ${data.status}`);
      throw new ValidationError("Estado de producto inválido");
    }

    const product = await repo.create(data);
    logger.info(`Producto creado correctamente: ${product._id}`);
    return product;
  }
}
