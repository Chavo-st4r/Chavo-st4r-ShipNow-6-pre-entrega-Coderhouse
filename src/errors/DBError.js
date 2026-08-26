export class DBError extends Error {
  constructor(message) {
    super(message);
    this.name = "DBError";
    this.statusCode = 500; // Error interno del servidor
  }
}
