import { BASE_URL } from "../utils/apiConfig";
import * as request from "./requester";

export const login = (email, password) =>
  request.post(`${BASE_URL}/auth/login`, { email, password });

export const logout = async (accessToken) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/logout`, {
      headers: {
        "X-Authorization": accessToken,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
