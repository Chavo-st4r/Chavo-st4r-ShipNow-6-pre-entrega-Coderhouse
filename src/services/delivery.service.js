import DeliveryModel from "../models/delivery.model.js";

export class DeliveryService {
  async getAll() {
    return await DeliveryModel.find();
  }

  async create(data) {
    const delivery = new DeliveryModel(data);
    return await delivery.save();
  }

  async getOne(id) {
    return await DeliveryModel.findById(id);
  }

  async delete(id) {
    return await DeliveryModel.findByIdAndDelete(id);
  }
}
