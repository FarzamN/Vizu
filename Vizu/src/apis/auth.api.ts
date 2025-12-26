import type { LoginPayload, RegisterPayload } from "@/lib/interface";
import { api } from ".";
import type { Dispatch, SetStateAction } from "react";
import type { NavigateFunction } from "react-router-dom";

export const adminRegisterAPI = async (payload: RegisterPayload) => {
  try {
    const { data } = await api.post("/admin/register", payload);

    if (!data.success) {
      throw new Error(data.error || "Admin registration failed");
    }

    return data;
  } catch (error: any) {
    throw error?.response?.data || { message: "Admin registration failed" };
  }
};

export const adminLoginAPI = async (
  payload: LoginPayload,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setError: Dispatch<SetStateAction<string>>,
  navigate: NavigateFunction
) => {
  setLoading(true);
  try {
    const { data } = await api.post("/admin/login", payload);
    setLoading(false);
    if (data.success) {
      navigate("/admin/dashboard");
      localStorage.setItem("user", JSON.stringify(data.data));
      localStorage.setItem("token", data.token);
    } else {
      setError(data.error);
    }
  } catch (error: any) {
    setLoading(false);
    throw error?.response?.data || { message: "Admin login failed" };
  }
};

export const restaurantLoginAPI = async (payload: LoginPayload) => {
  try {
    const { data } = await api.post("/rest/login-restaurant", payload);

    if (!data.success) {
      throw new Error(data.error || "Restaurant login failed");
    }

    localStorage.setItem("user", JSON.stringify(data.data));
    localStorage.setItem("token", data.token);

    return data;
  } catch (error: any) {
    throw error?.response?.data || { message: "Restaurant login failed" };
  }
};

/* =======================
   LOGOUT
======================= */

export const logoutAPI = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

export const createRestaurantAPI = () => {};
export const getAllRestaurantAPI = () => {};
export const getRestaurantByIdAPI = () => {};
