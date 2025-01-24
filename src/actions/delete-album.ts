import axios from 'axios';

export const deleteAlbumItem = async (location: string) => {
  const response = await axios.delete(`${location}/`, {
    headers: {
      "Content-Type": "application/json",
      "Allow-Control-Access-Policy": true,
      "Access-Control-Allow-Credentials": true,
    },
    withCredentials: true,
  });
  return response;
};