/**
 * @swagger
 * tags:
 *   name: Mocks
 *   description: Generación y carga de datos falsos
 */

/**
 * @swagger
 * /api/mocks/users:
 *   get:
 *     summary: Generar usuarios falsos
 *     tags: [Mocks]
 *     responses:
 *       200:
 *         description: Lista de usuarios mock generados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /api/mocks/orders:
 *   get:
 *     summary: Generar pedidos falsos
 *     tags: [Mocks]
 *     responses:
 *       200:
 *         description: Lista de pedidos mock generados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */

/**
 * @swagger
 * /api/mocks/deliveries:
 *   get:
 *     summary: Generar entregas falsas
 *     tags: [Mocks]
 *     responses:
 *       200:
 *         description: Lista de entregas mock generadas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Delivery'
 */

/**
 * @swagger
 * /api/mocks/seed/users:
 *   post:
 *     summary: Insertar usuarios falsos en la base de datos
 *     tags: [Mocks]
 *     responses:
 *       201:
 *         description: Usuarios mock insertados correctamente
 */

/**
 * @swagger
 * /api/mocks/seed/orders:
 *   post:
 *     summary: Insertar pedidos falsos en la base de datos
 *     tags: [Mocks]
 *     responses:
 *       201:
 *         description: Pedidos mock insertados correctamente
 */

/**
 * @swagger
 * /api/mocks/seed/deliveries:
 *   post:
 *     summary: Insertar entregas falsas en la base de datos
 *     tags: [Mocks]
 *     responses:
 *       201:
 *         description: Entregas mock insertadas correctamente
 */

import express from "express";
import { getMockUsers, seedMockUsers, seedMockOrders, seedMockDeliveries } from "../controllers/mock.controller.js";

const router = express.Router();

router.get("/users", getMockUsers);
router.post("/seed/users", seedMockUsers);
router.post("/seed/orders", seedMockOrders);
router.post("/seed/deliveries", seedMockDeliveries);

export default router;
