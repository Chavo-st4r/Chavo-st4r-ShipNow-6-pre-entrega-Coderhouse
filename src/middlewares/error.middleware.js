import logger from "../logger/logger.js";

export function errorHandler(err, req, res, next) {
  const status = err.statusCode || 500;
  const message = err.message || "Error interno del servidor";
  const type = err.name || "ServerError";

  // Logging según tipo
  if (type === "ValidationError" || type === "NotFoundError") {
    logger.warning(message);
  } else if (type === "DBError") {
    logger.error(message);
  } else {
    logger.fatal(`Error inesperado: ${message}`);
  }

  // Respuesta uniforme
  res.status(status).json({
    error: {
      type,
      message,
      status,
    },
  });
}
