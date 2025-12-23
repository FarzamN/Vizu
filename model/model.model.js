import { Schema, model } from "mongoose";

const modelSchema = new Schema({
  title: String,
  description: String,
  model: String,
});

export default model(modelSchema, "model");
