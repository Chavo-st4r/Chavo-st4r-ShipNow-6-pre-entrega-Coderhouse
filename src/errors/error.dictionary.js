export const ERROR_DICTIONARY = {
  USER_NOT_FOUND: { message: "Usuario inexistente", statusCode: 404 },
  ORDER_NOT_FOUND: { message: "Pedido no encontrado", statusCode: 404 },
  INVALID_STATUS: { message: "Estado inválido", statusCode: 400 },
  INVALID_QTY: { message: "Cantidad inválida de mocks", statusCode: 400 },
  DB_ERROR: { message: "Error al guardar en la base", statusCode: 500 }
};
