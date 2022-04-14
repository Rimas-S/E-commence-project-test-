import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://ecommerceeasy.herokuapp.com/api/v1",
});
