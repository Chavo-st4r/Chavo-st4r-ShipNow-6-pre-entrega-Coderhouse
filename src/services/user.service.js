import { UserRepository } from "../repositories/user.repository.js";
import { NotFoundError } from "../errors/NotFoundError.js";
import { ValidationError } from "../errors/ValidationError.js";
import logger from "../logger/logger.js";

const userRepository = new UserRepository();

export class UserService {
  async createUser(data) {
    // Validación simple: email obligatorio
    if (!data.email) {
      logger.warning("Intento de creación de usuario sin email");
      throw new ValidationError("El email es obligatorio");
    }

    // Chequear duplicados
    const existing = await userRepository.findByEmail?.(data.email);
    if (existing) {
      logger.warning(`Intento de registro con email duplicado: ${data.email}`);
      throw new ValidationError("El email ya está registrado");
    }

    const user = await userRepository.create(data);
    logger.info(`Usuario creado correctamente: ${user._id}`);
    return user;
  }

  async getUser(id) {
    const user = await userRepository.findById(id);
    if (!user) {
      logger.warning(`Usuario no encontrado con ID: ${id}`);
      throw new NotFoundError("Usuario inexistente");
    }
    logger.info(`Usuario obtenido: ${user._id}`);
    return user;
  }

  async getUsers() {
    const users = await userRepository.findAll();
    logger.info(`Listado de usuarios obtenido. Total: ${users.length}`);
    return users;
  }

  async deleteUser(id) {
    const deleted = await userRepository.deleteById(id);
    if (!deleted) {
      logger.warning(`Intento de eliminar usuario inexistente con ID: ${id}`);
      throw new NotFoundError("Usuario inexistente");
    }
    logger.info(`Usuario eliminado correctamente: ${id}`);
    return deleted;
  }
}
