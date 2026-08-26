import { UserRepository } from "../repositories/user.repository.js";
import { NotFoundError } from "../errors/NotFoundError.js";
import { ValidationError } from "../errors/ValidationError.js";

const userRepository = new UserRepository();

export class UserService {
  async createUser(data) {
    // Validación simple: email obligatorio
    if (!data.email) {
      throw new ValidationError("El email es obligatorio");
    }

    // Chequear duplicados
    const existing = await userRepository.findByEmail?.(data.email);
    if (existing) {
      throw new ValidationError("El email ya está registrado");
    }

    return await userRepository.create(data);
  }

  async getUser(id) {
    const user = await userRepository.findById(id);
    if (!user) {
      throw new NotFoundError("Usuario inexistente");
    }
    return user;
  }

  async getUsers() {
    return await userRepository.findAll();
  }

  async deleteUser(id) {
    const deleted = await userRepository.deleteById(id);
    if (!deleted) {
      throw new NotFoundError("Usuario inexistente");
    }
    return deleted;
  }
}
