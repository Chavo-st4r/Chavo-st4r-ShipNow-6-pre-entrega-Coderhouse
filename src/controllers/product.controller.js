import { ProductService } from "../services/product.service.js";

const service = new ProductService();

export const getProducts = async (req, res) => {
  try {
    const products = await service.listAvailable();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = await service.addProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
