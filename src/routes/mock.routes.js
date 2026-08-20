import express from "express";
import { getMockUsers, seedMockUsers, seedMockOrders, seedMockDeliveries } from "../controllers/mock.controller.js";

const router = express.Router();

router.get("/users", getMockUsers);
router.post("/seed/users", seedMockUsers);
router.post("/seed/orders", seedMockOrders);
router.post("/seed/deliveries", seedMockDeliveries);

export default router;
