import axios from "axios";
axios.defaults.headers.get["Pragma"] = "no-cache";
axios.defaults.headers.get["Cache-Control"] = "no-cache, no-store";
axios.defaults.headers.get["Content-Type"] = "application/json;charset=UTF-8";
axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
axios.defaults.baseURL = "https://notes-api-m46w.onrender.com";
export default axios;
