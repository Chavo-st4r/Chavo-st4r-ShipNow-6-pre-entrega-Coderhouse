/**
 * @swagger
 * tags:
 *   name: Deliveries
 *   description: Gestión de entregas
 */

/**
 * @swagger
 * /api/deliveries:
 *   get:
 *     summary: Listar todas las entregas
 *     tags: [Deliveries]
 *     responses:
 *       200:
 *         description: Lista de entregas obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Delivery'
 *       404:
 *         description: No se encontraron entregas
 */

/**
 * @swagger
 * /api/deliveries:
 *   post:
 *     summary: Crear una nueva entrega
 *     tags: [Deliveries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Delivery'
 *     responses:
 *       201:
 *         description: Entrega creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Delivery'
 *       400:
 *         description: Datos inválidos
 */

/**
 * @swagger
 * /api/deliveries/{id}:
 *   get:
 *     summary: Obtener una entrega por ID
 *     tags: [Deliveries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la entrega
 *     responses:
 *       200:
 *         description: Entrega encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Delivery'
 *       404:
 *         description: Entrega no encontrada
 */

/**
 * @swagger
 * /api/deliveries/{id}:
 *   delete:
 *     summary: Eliminar una entrega por ID
 *     tags: [Deliveries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la entrega
 *     responses:
 *       200:
 *         description: Entrega eliminada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
 *       404:
 *         description: Entrega no encontrada
 */

import { Router } from "express";
import { DeliveryController } from "../controllers/delivery.controller.js";

const router = Router();
const deliveryController = new DeliveryController();

router.get("/", deliveryController.getAll);
router.post("/", deliveryController.create);
router.get("/:id", deliveryController.getOne);
router.delete("/:id", deliveryController.delete);

export default router;
