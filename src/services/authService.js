import { AUTH_URL } from "../utils/apiConfig";
import * as request from "./requester";

export const login = (email, password) =>
  request.post(`${AUTH_URL}/login`, { email, password });

export const logout = async (accessToken) => {
  try {
    const response = await fetch(`${AUTH_URL}/logout`, {
      headers: {
        "X-Authorization": accessToken,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
