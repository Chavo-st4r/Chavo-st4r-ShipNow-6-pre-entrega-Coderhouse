# ShipNow API - Módulo de Mocking

## Descripción
Este módulo agrega endpoints para generar y/o insertar datos simulados en MongoDB.  
Se implementa siguiendo arquitectura por capas (Controller, Service, Repository, Model) y usando constantes centralizadas.

## Requisitos previos
- Node.js v24+
- MongoDB corriendo localmente
- Archivo `.env` en la raíz con las siguientes variables:

PORT=3000
MONGODB_URI=mongodb://localhost:27017/shipnow
NODE_ENV=development

## Cómo correr el proyecto
1. Instalar dependencias:
   npm install

2. Levantar MongoDB:
   mongod --dbpath ~/shipnow-api/mongo-data

3. Iniciar el servidor:
   npm run dev

El server quedará escuchando en http://localhost:3000.

## Endpoints de Mocking

### Usuarios
- GET /api/mocks/users?qty=2  
  Devuelve usuarios simulados en JSON (no se guardan en DB).

- POST /api/mocks/seed/users?qty=5  
  Inserta usuarios simulados en MongoDB.  
  Respuesta esperada:
  {
    "insertados": 5,
    "coleccion": "usuarios"
  }

### Pedidos
- POST /api/mocks/seed/orders?qty=3  
  Inserta pedidos simulados asociados a clientes.  
  Respuesta esperada:
  {
    "insertados": 3,
    "coleccion": "pedidos"
  }

### Entregas
- POST /api/mocks/seed/deliveries?qty=2  
  Inserta entregas simuladas asociadas a pedidos y repartidores.  
  Respuesta esperada:
  {
    "insertados": 2,
    "coleccion": "entregas"
  }

## Checklist de pruebas
1. Server levantado con npm run dev.
2. MongoDB corriendo (mongod).
3. Probar cada endpoint