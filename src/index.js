import express from "express";
import mongoose from "mongoose";
import mockRoutes from "./routes/mock.routes.js";
import { config } from "./config/env.config.js";
import productRoutes from "./routes/product.routes.js";
import userRoutes from "./routes/user.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import logger from "./logger/logger.js";
import loggerRoutes from "./routes/logger.routes.js";

const app = express();
const PORT = config.port || 3000;

app.use(express.json());

// Rutas
app.use("/api/mocks", mockRoutes);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/logger", loggerRoutes);

// Middleware de errores al final
app.use(errorHandler);

// Conexión a MongoDB
mongoose.connect(config.mongoUri)
  .then(() => {
    logger.info("Conexión a MongoDB establecida");
    app.listen(PORT, () => {
      logger.info(`Servidor ShipNow escuchando en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    logger.fatal(`Error al conectar a MongoDB: ${err.message}`);
  });
