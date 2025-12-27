// models/User.ts
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }
  },
  { timestamps: true }
);

// Hot reload ke time multiple model banne se bachne ke liye. [web:76]
const User = models.User || model("User", UserSchema);

export default User;
