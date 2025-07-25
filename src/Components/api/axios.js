import axios from "axios";

const API = axios.create({
  baseURL:
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course",
});

export default API;
