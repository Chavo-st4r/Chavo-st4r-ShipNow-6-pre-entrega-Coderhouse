// Roles de usuario
export const ROLES = {
  CLIENTE: "cliente",
  REPARTIDOR: "repartidor",
  ADMIN: "admin"
};

// Estados de pedidos
export const ORDER_STATUS = {
  PENDING: "pendiente",
  IN_PROGRESS: "en_progreso",
  COMPLETED: "completado",
  CANCELLED: "cancelado"
};

// Estados de entregas
export const DELIVERY_STATUS = {
  IN_PROGRESS: "en_progreso",
  DELIVERED: "entregado",
  FAILED: "fallido"
};

// Estados de productos
export const PRODUCT_STATUS = {
  AVAILABLE: "disponible",
  OUT_OF_STOCK: "sin_stock",
  DISCONTINUED: "descontinuado"
};
