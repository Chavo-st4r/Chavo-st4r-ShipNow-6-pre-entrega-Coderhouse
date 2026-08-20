import mongoose from "mongoose";
import { ORDER_STATUS } from "../utils/constants.js";

const orderSchema = new mongoose.Schema({
  clienteId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  prioridad: { type: String, enum: ["ALTA", "MEDIA", "BAJA"], default: "MEDIA" },
  estado: { type: String, enum: Object.values(ORDER_STATUS), default: ORDER_STATUS.PENDING }
});

export const Order = mongoose.model("Order", orderSchema);
