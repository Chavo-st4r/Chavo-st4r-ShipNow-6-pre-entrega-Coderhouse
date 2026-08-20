import { Delivery } from "../models/Delivery.js";

export class DeliveryRepository {
  async insertMany(data) {
    return Delivery.insertMany(data);
  }
}
