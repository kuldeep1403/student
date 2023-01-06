import axios from "axios";

// const url = 'http://127.0.0.1:4000';
const url = "http://127.0.0.1:3019";
const instance = axios.create({
  baseURL: url,
});

export default instance;