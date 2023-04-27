import { BASE_URL } from "../utils/apiConfig";
import * as request from "./requester";


export const login = (email, password) =>
  request.post(`${BASE_URL}/api/auth/login`, { email, password });

export const logout = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/auth/logout`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
