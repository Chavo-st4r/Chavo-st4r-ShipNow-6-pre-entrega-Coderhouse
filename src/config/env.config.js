import dotenv from "dotenv";

dotenv.config();

const requiredVars = ["PORT", "MONGODB_URI", "NODE_ENV"];

requiredVars.forEach((v) => {
  if (!process.env[v]) {
    throw new Error(`Missing environment variable: ${v}`);
  }
});

export const config = {
  port: process.env.PORT,
  mongoUri: process.env.MONGODB_URI,
  nodeEnv: process.env.NODE_ENV,
};
