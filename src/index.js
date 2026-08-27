import mongoose from "mongoose";
import app from "./app.js";

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/shipnow";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Conectado a MongoDB");
  app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
})
.catch(err => console.error("Error de conexión a MongoDB:", err));
