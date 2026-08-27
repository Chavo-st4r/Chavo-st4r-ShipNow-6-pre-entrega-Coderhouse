import OrderModel from "../models/order.model.js";

export class OrderService {
  async getAll() {
    return await OrderModel.find();
  }

  async create(data) {
    const order = new OrderModel(data);
    return await order.save();
  }

  async getOne(id) {
    return await OrderModel.findById(id);
  }

  async delete(id) {
    return await OrderModel.findByIdAndDelete(id);
  }
}
