import mongoose from "mongoose";
import { ORDER_STATUS, ORDER_PRIORITY } from "../constants/index.js";

const orderSchema = new mongoose.Schema({
  clienteId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  prioridad: {
    type: String,
    enum: Object.values(ORDER_PRIORITY),
    default: ORDER_PRIORITY.MEDIUM
  },
  estado: {
    type: String,
    enum: Object.values(ORDER_STATUS),
    default: ORDER_STATUS.PENDING
  }
});

export const Order = mongoose.model("Order", orderSchema);
