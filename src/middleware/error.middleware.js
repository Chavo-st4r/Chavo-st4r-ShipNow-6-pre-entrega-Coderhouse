export function errorHandler(err, req, res, next) {
  const status = err.statusCode || 500;
  const message = err.message || "Error interno del servidor";

  res.status(status).json({
    error: {
      type: err.name,
      message,
      status
    }
  });
}
