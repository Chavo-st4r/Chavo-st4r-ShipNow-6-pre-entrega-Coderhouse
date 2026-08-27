import { OrderService } from "../services/order.service.js";

export class OrderController {
  constructor() {
    this.orderService = new OrderService();
  }

  getAll = async (req, res, next) => {
    try {
      const orders = await this.orderService.getAll();
      res.json(orders);
    } catch (error) {
      next(error);
    }
  };

  create = async (req, res, next) => {
    try {
      const order = await this.orderService.create(req.body);
      res.status(201).json(order);
    } catch (error) {
      next(error);
    }
  };

  getOne = async (req, res, next) => {
    try {
      const order = await this.orderService.getOne(req.params.id);
      if (!order) return res.status(404).json({ error: "Pedido no encontrado" });
      res.json(order);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      const deleted = await this.orderService.delete(req.params.id);
      if (!deleted) return res.status(404).json({ error: "Pedido no encontrado" });
      res.json({ message: "Pedido eliminado correctamente" });
    } catch (error) {
      next(error);
    }
  };
}
