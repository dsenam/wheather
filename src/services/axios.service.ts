import { API_PATHS } from "@/utils/constants/apiPaths.constants";
import axios from "axios";

const defaultHeaders = {
  "Content-Type": "application/json; charset=utf-8",
  "Accept-Language": "pt-br",
  Accept: "application/json; charset=utf-8",
};

const baseURL = API_PATHS.WEATHER.GET;

export const instance = axios.create({
  baseURL,
  headers: defaultHeaders,
});
