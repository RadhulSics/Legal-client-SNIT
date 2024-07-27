import axios from "axios";

const axiosMultipartInstance = axios.create({

  // baseURL: "http://hybrid.srishticampus.in/legal_practice_api/",

  baseURL:  "http://localhost:4041/legal_practice_api/",

  headers: {
    "Content-Type": "multipart/form-data", 
  },
});

export default axiosMultipartInstance;