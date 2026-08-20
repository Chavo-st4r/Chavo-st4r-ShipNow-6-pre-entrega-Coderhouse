import mongoose from "mongoose";
import { PRODUCT_STATUS } from "../utils/constants.js";

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  estado: {
    type: String,
    enum: Object.values(PRODUCT_STATUS),
    default: PRODUCT_STATUS.AVAILABLE
  }
});

export const Product = mongoose.model("Product", productSchema);
