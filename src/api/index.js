import axios, { Axios } from "axios";

export const API = axios.create({
    baseURL:"https://api.quotable.io/"
})
