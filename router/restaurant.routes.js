import { Router } from "express";
import { authGuard } from "../middleware/auth.middleware.js";
import {
  createRestaurant,
  getAllRestaurant,
  loginRestaurant,
  getRestaurantById,
} from "../controller/restaurant.controller.js";

const adminRouter = Router();

adminRouter.post("/create-restaurant", createRestaurant);
adminRouter.post("/login-restaurant", loginRestaurant);
adminRouter.get(
  "/get-all-restaurant",
  // authGuard(["ADMIN"]),
  getAllRestaurant
);
adminRouter.get(
  "/get-restaurant/:id",
  // authGuard(["ADMIN"]),
  getRestaurantById
);
export default adminRouter;
