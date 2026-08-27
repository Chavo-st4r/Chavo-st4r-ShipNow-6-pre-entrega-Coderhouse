import { DeliveryService } from "../services/delivery.service.js";

export class DeliveryController {
  constructor() {
    this.deliveryService = new DeliveryService();
  }

  getAll = async (req, res, next) => {
    try {
      const deliveries = await this.deliveryService.getAll();
      res.json(deliveries);
    } catch (error) {
      next(error);
    }
  };

  create = async (req, res, next) => {
    try {
      const delivery = await this.deliveryService.create(req.body);
      res.status(201).json(delivery);
    } catch (error) {
      next(error);
    }
  };

  getOne = async (req, res, next) => {
    try {
      const delivery = await this.deliveryService.getOne(req.params.id);
      if (!delivery) return res.status(404).json({ error: "Entrega no encontrada" });
      res.json(delivery);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      const deleted = await this.deliveryService.delete(req.params.id);
      if (!deleted) return res.status(404).json({ error: "Entrega no encontrada" });
      res.json({ message: "Entrega eliminada correctamente" });
    } catch (error) {
      next(error);
    }
  };
}
