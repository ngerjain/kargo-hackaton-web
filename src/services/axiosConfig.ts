import axios from "axios";

//setup api base url
let baseURL = process.env.REACT_APP_BASE_URL;

//all axios using this instance
const instance = axios.create({
  baseURL,
});

// //put token in every request
// instance.interceptors.request.use(
//   (config) => {
//     if (!config.headers.Authorization) {
//       const token = localStorage.getItem("token");

//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// //reject humanity return to apes because your token expired
// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       localStorage.removeItem("token");
//       window.location.href = `http://localhost:3001/login`;
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );

export default instance;
