import express from "express";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import orderRoutes from "./routes/order.routes.js";
import deliveryRoutes from "./routes/delivery.routes.js";
import mockRoutes from "./routes/mock.routes.js";
import loggerRoutes from "./routes/logger.routes.js";
import { swaggerUi, swaggerSpec } from "./config/swagger.config.js";

const app = express();
app.use(express.json());

// Rutas
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/deliveries", deliveryRoutes);
app.use("/api/mocks", mockRoutes);
app.use("/api/logger", loggerRoutes);

// Swagger
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
