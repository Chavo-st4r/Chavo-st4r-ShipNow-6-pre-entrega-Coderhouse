# ShipNow API — Pre-entrega Módulo 1

## Objetivo
Refactorizar la API base de ShipNow a una arquitectura profesional por capas (Controller → Service → Repository) y agregar un sistema de configuración de entorno validado.

## Instrucciones para correr el proyecto localmente

1. Clonar el repositorio:
   git clone <URL_DEL_REPO>
   cd shipnow-api

2. Instalar dependencias:
   npm install

3. Crear un archivo `.env` en la raíz del proyecto, basado en `.env.example`:
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/shipnow
   NODE_ENV=development

4. Ejecutar el servidor:
   npm start

La aplicación validará las variables de entorno al arrancar.  
Si falta alguna crítica (ej. MONGODB_URI), la app lanzará un error descriptivo y no iniciará.

## Explicación de la separación Service vs Repository

- Repository: es el único que conoce Mongoose/MongoDB. Se encarga de acceder a la base de datos y aplicar filtros o proyecciones.
- Service: contiene la lógica de negocio. Por ejemplo, decidir qué productos mostrar según su stock o validar permisos de usuario.
- Motivo de la separación:
  - Evita que el Controller tenga lógica de base de datos.
  - Permite mantener el acceso a datos encapsulado y reutilizable.
  - Facilita pruebas unitarias y escalabilidad futura.

## Estructura del proyecto

src/
 ├── controllers/   # Puerta de entrada HTTP
 ├── services/      # Lógica de negocio
 ├── repositories/  # Acceso a Mongo/Mongoose
 ├── models/        # Definición de esquemas
 ├── config/        # Configuración de entorno validada
 ├── utils/         # Constantes (roles, estados)
 └── routes/        # Conexión mínima entre path y controller

## Criterios cumplidos
- Arquitectura en 3 capas aplicada a Users y Products.
- `.env` fuera del repo, `.env.example` presente.
- Validación de variables críticas al inicio.
- Roles y estados definidos en constantes.
- Routes mínimas, sin lógica extra.

## Entrega
El link al repositorio debe ser enviado a través de la plataforma.
