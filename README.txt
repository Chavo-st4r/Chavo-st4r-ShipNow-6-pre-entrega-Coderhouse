ShipNow API - Pre‑entrega 6
===========================

Descripción
-----------
API RESTful desarrollada con Node.js, Express y MongoDB para la gestión de:
- Usuarios
- Productos
- Pedidos
- Entregas
- Mocks (datos falsos para pruebas)
- Logger (validación de logs)

Esta entrega corresponde a la Pre‑entrega 6 del curso Backend II, donde se incorporan
tests funcionales automatizados con Mocha, Chai y Supertest.

Objetivos
---------
- Configurar entorno de testing separado del de desarrollo
- Incorporar Mocha, Chai y Supertest
- Validar endpoints principales
- Probar casos exitosos y errores esperados
- Documentar ejecución de tests

Entorno de Testing
------------------
Se utiliza un archivo `.env.test` con variables descartables:
- PORT=4000
- MONGODB_URI=mongodb://localhost:27017/shipnow_test
- NODE_ENV=test
- JWT_SECRET=testsecret

La base de datos de testing es independiente de la de desarrollo.

Instalación
-----------
1. Clonar el repositorio
2. Instalar dependencias:
   npm install
3. Levantar el servidor en desarrollo:
   npm run dev
4. Ejecutar los tests:
   npm test

Herramientas
------------
- Mocha: framework de ejecución de tests
- Chai: librería de aserciones
- Supertest: peticiones HTTP a la API

Cobertura de Tests
------------------
Usuarios (/api/users)
- Listar usuarios
- Crear usuario válido
- Error por datos incompletos

Productos (/api/products)
- Listar productos
- Crear producto válido
- Error por ID inexistente

Pedidos (/api/orders)
- Listar pedidos
- Crear pedido válido
- Error por ID inexistente

Entregas (/api/deliveries)
- Listar entregas
- Crear entrega válida
- Error por datos incompletos

Mocks (/api/mocks)
- Generar usuarios falsos
- Insertar usuarios falsos
- Generar pedidos falsos

Logger (/api/logger)
- Endpoint de prueba

Swagger (/api/docs)
- Ruta responde correctamente

Notas
-----
- Los datos de prueba son controlados y descartables.
- Se valida status HTTP y estructura de respuesta.
- Los tests no dependen de datos reales ni del estado previo de la base.
- Proyecto listo para entrega académica.
