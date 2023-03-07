import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000', // Your API endpoint
  headers: {
    'Content-Type': 'application/json', // Set the default content type for requests
  },
});

export const get = async (url, headers) => {
  try {
    const response = await instance.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const post = async (url, data, headers) => {
  try {
    const response = await instance.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const patch = async (url, data, headers) => {
  try {
    const response = await instance.patch(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const put = async (url, data, headers) => {
  try {
    const response = await instance.put(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const del = async (url, headers) => {
  try {
    const response = await instance.delete(url, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
