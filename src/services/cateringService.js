import axios from "axios";
import { BASE_URL } from "../utils/apiConfig";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

export const getCatering = async () => {
  const response = await axiosInstance.get(
    `${BASE_URL}/uploads/images/catering/`
  );
  return response.data;
};
