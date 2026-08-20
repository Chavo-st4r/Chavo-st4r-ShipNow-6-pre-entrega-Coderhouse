import mongoose from "mongoose";
import { DELIVERY_STATUS } from "../utils/constants.js";

const deliverySchema = new mongoose.Schema({
  pedidoId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  repartidorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  estado: { type: String, enum: Object.values(DELIVERY_STATUS), default: DELIVERY_STATUS.IN_PROGRESS }
});

export const Delivery = mongoose.model("Delivery", deliverySchema);
