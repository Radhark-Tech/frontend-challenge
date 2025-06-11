import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fakeapi.platzi.com/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
