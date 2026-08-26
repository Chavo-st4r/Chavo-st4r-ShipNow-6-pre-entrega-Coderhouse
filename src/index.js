import express from "express";
import mongoose from "mongoose";
import mockRoutes from "./routes/mock.routes.js";
import { config } from "./config/env.config.js";
import productRoutes from "./routes/product.routes.js";
import userRoutes from "./routes/user.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();
app.use(express.json());
app.use(errorHandler);

app.use("/api/mocks", mockRoutes);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

mongoose.connect(config.mongoUri)
  .then(() => {
    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  })
  .catch(err => {
    console.error("DB connection failed:", err.message);
  });
