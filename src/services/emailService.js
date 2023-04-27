import axios from "axios";
import { BASE_URL } from "../utils/apiConfig";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

async function sendEmail(formDataToSend) {
  try {
    const response = await axiosInstance.post(
      `${BASE_URL}/send-email`,
      formDataToSend
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error(error);
    return { success: false, error: error };
  }
}

export { sendEmail };
