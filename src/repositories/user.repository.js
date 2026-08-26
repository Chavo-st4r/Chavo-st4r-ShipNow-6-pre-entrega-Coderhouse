import { User } from "../models/User.js";

export class UserRepository {
  async create(data) {
    return await User.create(data);
  }

  async findById(id) {
    return await User.findById(id);
  }

  async findAll() {
    return await User.find();
  }

  async deleteById(id) {
    return await User.findByIdAndDelete(id);
  }
}