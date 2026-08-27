ShipNow API - Pre‑entrega 5
===========

Descripción
-----------
API RESTful desarrollada con Node.js, Express y MongoDB para la gestión de:
- Usuarios
- Productos
- Pedidos
- Entregas
- Mocks (datos falsos para pruebas)
- Logger (validación de logs)

Arquitectura
------------
El proyecto sigue una arquitectura por capas:
- Models: Definición de esquemas de MongoDB
- Services: Lógica de negocio y acceso a datos
- Controllers: Manejo de peticiones y respuestas
- Routes: Definición de endpoints
- Config: Configuración de Swagger y otros módulos

Instalación
-----------
1. Clonar el repositorio
2. Instalar dependencias:
   npm install
3. Levantar el servidor:
   npm run dev
4. Conexión a MongoDB:
   mongodb://localhost:27017/shipnow

Endpoints principales
---------------------
Usuarios (/api/users)
- GET /api/users → Listar usuarios
- POST /api/users → Crear usuario
- GET /api/users/{id} → Obtener usuario por ID
- DELETE /api/users/{id} → Eliminar usuario

Productos (/api/products)
- GET /api/products → Listar productos
- POST /api/products → Crear producto
- GET /api/products/{id} → Obtener producto por ID
- DELETE /api/products/{id} → Eliminar producto

Pedidos (/api/orders)
- GET /api/orders → Listar pedidos
- POST /api/orders → Crear pedido
- GET /api/orders/{id} → Obtener pedido por ID
- DELETE /api/orders/{id} → Eliminar pedido

Entregas (/api/deliveries)
- GET /api/deliveries → Listar entregas
- POST /api/deliveries → Crear entrega
- GET /api/deliveries/{id} → Obtener entrega por ID
- DELETE /api/deliveries/{id} → Eliminar entrega

Mocks (/api/mocks)
- GET /api/mocks/users → Generar usuarios falsos
- GET /api/mocks/orders → Generar pedidos falsos
- GET /api/mocks/deliveries → Generar entregas falsas
- POST /api/mocks/seed/users → Insertar usuarios falsos
- POST /api/mocks/seed/orders → Insertar pedidos falsos
- POST /api/mocks/seed/deliveries → Insertar entregas falsas

Logger (/api/logger)
- GET /api/logger/test → Disparar logs en todos los niveles

Swagger
-------
La documentación interactiva está disponible en:
http://localhost:3000/api/docs

Schemas principales
-------------------
User:
- _id: string
- nombre: string
- email: string
- rol: string

Product:
- _id: string
- nombre: string
- descripcion: string
- precio: number
- stock: number

Order:
- _id: string
- clienteId: string
- estado: string
- prioridad: string

Delivery:
- _id: string
- pedidoId: string
- repartidorId: string
- estado: string

SuccessResponse:
- message: string

ErrorResponse:
- error: string
- message: string

Notas
-----
- Proyecto alineado con arquitectura por capas.
- Todos los módulos expuestos y documentados en Swagger.
- Listo para pruebas en Postman y entrega académica.
