import { Router } from "express";
import logger from "../logger/logger.js";

const router = Router();

router.get("/test", (req, res) => {
  logger.debug("Log nivel debug");
  logger.http("Log nivel http");
  logger.info("Log nivel info");
  logger.warning("Log nivel warning");
  logger.error("Log nivel error");
  logger.fatal("Log nivel fatal");

  res.json({ message: "Logs generados, revisar consola y archivos" });
});

export default router;
