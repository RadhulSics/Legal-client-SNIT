import axios from 'axios';

const axiosInstance = axios.create({

  //server api
  
  // baseURL: 'http://hybrid.srishticampus.in:4041/legal_practice_api/', 

//local api

baseURL: 'http://localhost:4041/legal_practice_api/', 

  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance