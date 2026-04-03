import axios from "axios";
import { BASE_URL } from "../utils/apiConfig";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

export const getInvitations = async () => {
  const response = await axiosInstance.get(
    `${BASE_URL}/uploads/images/cards/invitations/`
  );
  return response.data;
};

export const getTables = async () => {
  const response = await axiosInstance.get(
    `${BASE_URL}/uploads/images/cards/tables/`
  );
  return response.data;
};

export const getCards = async () => {
  const response = await axiosInstance.get(
    `${BASE_URL}/uploads/images/cards/cards/`
  );
  return response.data;
};
