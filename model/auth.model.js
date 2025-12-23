import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["ADMIN", "RESTAURANT"],
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    subscriptionStatus: {
      type: String,
      default: "inactive",
    },
  },
  { timestamps: true }
);

export default model("User", userSchema);
