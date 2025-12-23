import express from "express";
import cors from "cors";
import modelRoute from "./router/model.routes.js";
import authRoutes from "./router/auth.routes.js";
import connectDB from "./utils/db.js";

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/uploads", modelRoute);
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
