import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

// Definimos los niveles de log
const levels = {
  debug: 0,
  http: 1,
  info: 2,
  warning: 3,
  error: 4,
  fatal: 5,
};

// Colores opcionales para consola
winston.addColors({
  debug: "blue",
  http: "magenta",
  info: "green",
  warning: "yellow",
  error: "red",
  fatal: "bold red",
});

// Formato: timestamp + nivel + mensaje
const format = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    ({ timestamp, level, message }) => `${timestamp} [${level}] ${message}`
  )
);

// Configuración de transporte a archivo con rotación
const fileTransport = new DailyRotateFile({
  filename: "logs/error-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  level: "error", // solo guarda error y fatal
  maxFiles: "7d", // conserva 7 días de historial
});

// Configuración del logger centralizado
const logger = winston.createLogger({
  levels,
  format,
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === "production" ? "info" : "debug",
    }),
    fileTransport,
  ],
});

export default logger;
