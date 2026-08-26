import { faker } from "@faker-js/faker";
import { UserRepository } from "../repositories/user.repository.js";
import { OrderRepository } from "../repositories/order.repository.js";
import { DeliveryRepository } from "../repositories/delivery.repository.js";
import { ROLES, ORDER_STATUS, DELIVERY_STATUS, ORDER_PRIORITY } from "../constants/index.js";
import { ValidationError } from "../errors/ValidationError.js";
import { DBError } from "../errors/DBError.js";
import logger from "../logger/logger.js";

const userRepo = new UserRepository();
const orderRepo = new OrderRepository();
const deliveryRepo = new DeliveryRepository();

export class MockService {
  // Usuarios simulados con faker
  generateUsers(qty) {
    if (!qty || qty <= 0) {
      logger.warning("Cantidad inválida de usuarios a generar");
      throw new ValidationError("Cantidad inválida de usuarios a generar");
    }

    const roles = Object.values(ROLES);
    const users = Array.from({ length: qty }, () => ({
      nombre: faker.person.fullName(),
      email: faker.internet.email(),
      rol: faker.helpers.arrayElement(roles),
    }));
    logger.info(`Usuarios generados con faker. Total: ${users.length}`);
    return users;
  }

  async seedUsers(qty) {
    try {
      const users = this.generateUsers(qty);
      const result = await userRepo.insertMany(users);
      logger.info(`Usuarios insertados en la base. Total: ${result.length}`);
      return result;
    } catch (err) {
      logger.error(`Error al guardar usuarios: ${err.message}`);
      throw new DBError("Error al guardar usuarios en la base");
    }
  }

  // Pedidos simulados con faker
  generateOrders(qty, clientes) {
    if (!qty || qty <= 0) {
      logger.warning("Cantidad inválida de pedidos a generar");
      throw new ValidationError("Cantidad inválida de pedidos a generar");
    }
    if (!clientes || clientes.length === 0) {
      logger.warning("Se requieren clientes para generar pedidos");
      throw new ValidationError("Se requieren clientes para generar pedidos");
    }

    const estados = Object.values(ORDER_STATUS);
    const prioridades = Object.values(ORDER_PRIORITY);
    const orders = Array.from({ length: qty }, (_, i) => ({
      clienteId: clientes[i % clientes.length]._id,
      prioridad: faker.helpers.arrayElement(prioridades),
      estado: faker.helpers.arrayElement(estados),
    }));
    logger.info(`Pedidos generados con faker. Total: ${orders.length}`);
    return orders;
  }

  async seedOrders(qty, clientes) {
    try {
      const orders = this.generateOrders(qty, clientes);
      const result = await orderRepo.insertMany(orders);
      logger.info(`Pedidos insertados en la base. Total: ${result.length}`);
      return result;
    } catch (err) {
      logger.error(`Error al guardar pedidos: ${err.message}`);
      throw new DBError("Error al guardar pedidos en la base");
    }
  }

  // Entregas simuladas con faker
  generateDeliveries(qty, pedidos, repartidores) {
    if (!qty || qty <= 0) {
      logger.warning("Cantidad inválida de entregas a generar");
      throw new ValidationError("Cantidad inválida de entregas a generar");
    }
    if (!pedidos || pedidos.length === 0) {
      logger.warning("Se requieren pedidos para generar entregas");
      throw new ValidationError("Se requieren pedidos para generar entregas");
    }
    if (!repartidores || repartidores.length === 0) {
      logger.warning("Se requieren repartidores para generar entregas");
      throw new ValidationError("Se requieren repartidores para generar entregas");
    }

    const estados = Object.values(DELIVERY_STATUS);
    const deliveries = Array.from({ length: qty }, (_, i) => ({
      pedidoId: pedidos[i % pedidos.length]._id,
      repartidorId: repartidores[i % repartidores.length]._id,
      estado: faker.helpers.arrayElement(estados),
    }));
    logger.info(`Entregas generadas con faker. Total: ${deliveries.length}`);
    return deliveries;
  }

  async seedDeliveries(qty, pedidos, repartidores) {
    try {
      const deliveries = this.generateDeliveries(qty, pedidos, repartidores);
      const result = await deliveryRepo.insertMany(deliveries);
      logger.info(`Entregas insertadas en la base. Total: ${result.length}`);
      return result;
    } catch (err) {
      logger.error(`Error al guardar entregas: ${err.message}`);
      throw new DBError("Error al guardar entregas en la base");
    }
  }
}
