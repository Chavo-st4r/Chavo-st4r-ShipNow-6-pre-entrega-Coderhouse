# Pre-entrega Módulo 4 — Logging y monitoreo básico

## Objetivo
Incorporar un sistema de logging profesional en ShipNow API usando Winston.  
El proyecto ya cuenta con arquitectura por capas, mocks y manejo centralizado de errores.  
Ahora se agrega un logger centralizado para registrar eventos importantes, advertencias y errores, tanto en consola como en archivos.

## Herramienta utilizada
- Winston como logger centralizado.
- winston-daily-rotate-file para rotación de archivos.

## Niveles de log
- debug
- http
- info
- warning
- error
- fatal

## Uso del logger
- Inicio del servidor y conexión a MongoDB.
- Middleware global de errores.
- Servicios principales (UserService, ProductService, MockService).
- Generación de datos mock.
- Creación y eliminación de entidades importantes.

## Persistencia de logs
- Los errores y fatales se guardan en la carpeta `/logs`.
- Los archivos se rotan diariamente y se conservan 7 días.
- La carpeta `/logs` está incluida en `.gitignore` para evitar subir archivos generados al repositorio.

## Endpoint de prueba
- Ruta: `GET /api/logger/test`
- Genera logs en todos los niveles definidos.
- Respuesta: `{ "message": "Logs generados, revisar consola y archivos" }`
- Permite verificar que los logs aparecen en consola y en archivos.

## Diferencias entre entornos
- Desarrollo: se muestran todos los niveles (incluyendo debug).
- Producción: se registran solo info, warning, error y fatal.

## Cómo probar
1. Levantar el servidor con `npm start`.
2. Acceder a `http://localhost:3000/api/logger/test`.
3. Revisar la consola: deben aparecer todos los niveles con timestamp.
4. Revisar la carpeta `/logs`: solo deben guardarse los niveles error y fatal.

## Ejemplo de salida esperada

### En consola (modo desarrollo)
2026-08-26 18:05:12 [debug] Log nivel debug
2026-08-26 18:05:12 [http] Log nivel http
2026-08-26 18:05:12 [info] Log nivel info
2026-08-26 18:05:12 [warning] Log nivel warning
2026-08-26 18:05:12 [error] Log nivel error
2026-08-26 18:05:12 [fatal] Log nivel fatal

### En archivo `/logs/error-2026-08-26.log`
2026-08-26 18:05:12 [error] Log nivel error
2026-08-26 18:05:12 [fatal] Log nivel fatal

## Notas
- En consola se muestran todos los niveles con colores y timestamp.
- En archivos solo se guardan error y fatal, con rotación diaria y conservación de 7 días.
- En producción no se muestran debug ni http en consola, solo desde info hacia arriba.
