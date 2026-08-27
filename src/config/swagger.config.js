import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ShipNow API",
      version: "1.0.0",
      description: "API para gestión de usuarios, pedidos, entregas, mocks y logger",
    },
    servers: [
      { url: "http://localhost:3000", description: "Servidor local" }
    ],
    components: {
      schemas: {
        User: {
          type: "object",
          properties: {
            _id: { type: "string" },
            nombre: { type: "string" },
            email: { type: "string" },
            rol: { type: "string" }
          }
        },
        Order: {
          type: "object",
          properties: {
            _id: { type: "string" },
            clienteId: { type: "string" },
            estado: { type: "string" },
            prioridad: { type: "string" }
          }
        },
        Delivery: {
          type: "object",
          properties: {
            _id: { type: "string" },
            pedidoId: { type: "string" },
            repartidorId: { type: "string" },
            estado: { type: "string" }
          }
        },
        SuccessResponse: {
          type: "object",
          properties: {
            message: { type: "string" }
          }
        },
        ErrorResponse: {
          type: "object",
          properties: {
            error: { type: "string" },
            message: { type: "string" }
          }
        }
      }
    }
  },
  apis: ["./src/routes/*.js"], // rutas donde documentás con JSDoc
};

export const swaggerSpec = swaggerJsdoc(options);
export { swaggerUi };
