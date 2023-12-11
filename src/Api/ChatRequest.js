import axios from "axios";
const API = axios.create({ baseURL: "https://chaint-chatapplication.onrender.com" });

export const userChats = (id) => API.get(`/chat/${id}`);
