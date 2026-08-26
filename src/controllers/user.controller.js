import { UserService } from "../services/user.service.js";

const userService = new UserService();

export class UserController {
  async create(req, res, next) {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  }

  async getOne(req, res, next) {
    try {
      const user = await userService.getUser(req.params.id);
      if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
      res.json(user);
    } catch (err) {
      next(err);
    }
  }

  async getAll(req, res, next) {
    try {
      const users = await userService.getUsers();
      res.json(users);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      await userService.deleteUser(req.params.id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}