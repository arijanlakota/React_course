import axios from "axios";
export const newApi = axios.create({
    baseURL:"https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=bacbe26a9e9c405c979c5245b7644fb9"
})
export const searchApi = axios.create({
    baseURL:"https://newsapi.org/v2/"
})
