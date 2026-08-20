import { User } from "../models/User.js";

export class UserRepository {
  async insertMany(data) {
    return User.insertMany(data);
  }
}
