import { UserRepository } from "../repositories/user.repository.js";
import { OrderRepository } from "../repositories/order.repository.js";
import { DeliveryRepository } from "../repositories/delivery.repository.js";
import { ROLES, ORDER_STATUS, DELIVERY_STATUS } from "../utils/constants.js";

const userRepo = new UserRepository();
const orderRepo = new OrderRepository();
const deliveryRepo = new DeliveryRepository();

export class MockService {

    generateUsers(qty) {
    const roles = Object.values(ROLES);
    return Array.from({ length: qty }, (_, i) => ({
      nombre: `Usuario${i + 1}`,
      email: `usuario${i + 1}@test.com`,
      rol: roles[Math.floor(Math.random() * roles.length)],
    }));
  }

  async seedUsers(qty) {
    const users = this.generateUsers(qty);
    return await userRepo.insertMany(users);
  }

  generateOrders(qty, clientes) {
    const estados = Object.values(ORDER_STATUS);
    const prioridades = ["ALTA", "MEDIA", "BAJA"];
    return Array.from({ length: qty }, (_, i) => ({
      clienteId: clientes[i % clientes.length]._id,
      prioridad: prioridades[Math.floor(Math.random() * prioridades.length)],
      estado: estados[Math.floor(Math.random() * estados.length)],
    }));
  }

  async seedOrders(qty, clientes) {
    const orders = this.generateOrders(qty, clientes);
    return await orderRepo.insertMany(orders);
  }

  generateDeliveries(qty, pedidos, repartidores) {
    const estados = Object.values(DELIVERY_STATUS);
    return Array.from({ length: qty }, (_, i) => ({
      pedidoId: pedidos[i % pedidos.length]._id,
      repartidorId: repartidores[i % repartidores.length]._id,
      estado: estados[Math.floor(Math.random() * estados.length)],
    }));
  }

  async seedDeliveries(qty, pedidos, repartidores) {
    const deliveries = this.generateDeliveries(qty, pedidos, repartidores);
    return await deliveryRepo.insertMany(deliveries);
  }
}
