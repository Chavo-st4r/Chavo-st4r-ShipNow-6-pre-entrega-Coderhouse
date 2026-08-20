import { Order } from "../models/Order.js";

export class OrderRepository {
  async insertMany(data) {
    return Order.insertMany(data);
  }
}
