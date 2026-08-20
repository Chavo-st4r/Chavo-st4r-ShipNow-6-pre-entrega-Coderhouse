import { MockService } from "../services/mock.service.js";

const service = new MockService();

export const getMockUsers = (req, res) => {
  const qty = parseInt(req.query.qty) || 1;
  res.json(service.generateUsers(qty));
};

export const seedMockUsers = async (req, res) => {
  const qty = parseInt(req.query.qty) || 1;
  const result = await service.seedUsers(qty);
  res.json({ insertados: result.length, coleccion: "usuarios" });
};

export const seedMockOrders = async (req, res) => {
  const qty = parseInt(req.query.qty) || 1;
  const clientes = await service.seedUsers(3); 
  const result = await service.seedOrders(qty, clientes);
  res.json({ insertados: result.length, coleccion: "pedidos" });
};

export const seedMockDeliveries = async (req, res) => {
  const qty = parseInt(req.query.qty) || 1;
  const clientes = await service.seedUsers(3);
  const pedidos = await service.seedOrders(3, clientes);
  const repartidores = await service.seedUsers(2);
  const result = await service.seedDeliveries(qty, pedidos, repartidores);
  res.json({ insertados: result.length, coleccion: "entregas" });
};
