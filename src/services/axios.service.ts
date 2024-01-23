import axios from "axios";

const defaultHeaders = {
  "Content-Type": "application/json; charset=utf-8",
  "Accept-Language": "pt-br",
  Accept: "application/json; charset=utf-8",
};

const baseURL = `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_API_KEY}`;

export const instance = axios.create({
  baseURL,
  headers: defaultHeaders,
});
