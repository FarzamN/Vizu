import { api } from ".";

/* =======================
   TYPES
======================= */

export interface LoginPayload {
  phone: string;
  password: string;
}

export interface RegisterPayload {
  phone: string;
  password: string;
}

/* =======================
   ADMIN AUTH
======================= */

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

export const adminLoginAPI = async (payload: LoginPayload) => {
  try {
    const { data } = await api.post("/admin/login", payload);

    if (!data.success) {
      throw new Error(data.error || "Admin login failed");
    }

    // Store auth
    localStorage.setItem("user", JSON.stringify(data.data));
    localStorage.setItem("token", data.token);

    return data;
  } catch (error: any) {
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
