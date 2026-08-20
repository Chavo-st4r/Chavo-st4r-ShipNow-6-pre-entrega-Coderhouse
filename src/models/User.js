import mongoose from "mongoose";
import { ROLES } from "../utils/constants.js";

const userSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  rol: {
    type: String,
    enum: Object.values(ROLES),
    default: ROLES.USER,
  },
});

export const User = mongoose.model("User", userSchema);
