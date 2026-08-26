# Pre-entrega Módulo 3 — Manejo profesional de errores

## Objetivo
Centralizar el manejo de errores de la ShipNow API en una capa común que devuelva respuestas HTTP consistentes, en lugar de responder errores de forma aislada en cada ruta o controller.

## Estructura implementada
- Carpeta src/errors/ con:
  - ValidationError.js: errores de validación (datos faltantes, cantidad inválida, estado incorrecto).
  - NotFoundError.js: errores de recursos inexistentes (usuario, producto, etc.).
  - DBError.js: errores de base de datos.
  - error.dictionary.js: diccionario con mensajes y códigos HTTP estándar.

- Middleware global src/middlewares/error.middleware.js:
  - Captura cualquier error lanzado en services o controllers.
  - Devuelve siempre una respuesta uniforme en formato JSON.

- Services modificados:
  - UserService: lanza ValidationError si falta email o está duplicado, NotFoundError si el usuario no existe.
  - ProductService: lanza ValidationError si faltan datos o estado inválido, NotFoundError si no hay productos.
  - MockService: valida cantidades, clientes, pedidos y repartidores. Lanza ValidationError en casos inválidos y DBError si falla la inserción en MongoDB.

## Formato de respuesta de error
Todos los errores responden con una estructura clara y uniforme:

{
  "error": {
    "type": "ValidationError",
    "message": "Cantidad inválida de mocks",
    "status": 400
  }
}

## Cómo probar
1. Usuarios
   - GET /api/users/:id con un ID inexistente → devuelve NotFoundError.
   - POST /api/users sin email → devuelve ValidationError.
   - POST /api/users con email ya registrado → devuelve ValidationError.

2. Productos
   - POST /api/products sin nombre o precio → devuelve ValidationError.
   - POST /api/products con estado inválido → devuelve ValidationError.
   - GET /api/products cuando no hay productos → devuelve NotFoundError.

3. Mocks
   - POST /api/mocks/users?qty=-5 → devuelve ValidationError (cantidad inválida).
   - POST /api/mocks/orders sin clientes → devuelve ValidationError.
   - POST /api/mocks/deliveries sin pedidos o repartidores → devuelve ValidationError.
   - Si falla la inserción en MongoDB → devuelve DBError.

## Conclusión
La API ahora maneja errores de forma centralizada, con clases personalizadas, un diccionario de errores y un middleware global. Esto asegura respuestas uniformes y predecibles en todos los módulos, incluyendo el de mocks. Los errores se lanzan en la capa de service y nunca se responden directamente en los controllers, manteniendo la arquitectura por capas y un formato consistente de salida.
