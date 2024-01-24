import { getData } from "@/services/request.service";
import { IUseGetWeatherForecastParams, IUseGetWeatherParams } from "./types";
import { API_PATHS } from "@/utils/constants/apiPaths.constants";

export const requestGetWeatherInfo = async (
  location: IUseGetWeatherParams["location"]
) => {
  const filterLocation = `&q=${location}`;

  const response = await getData(`${API_PATHS.WEATHER.GET}${filterLocation}`);

  return response;
};

export const requestGetWeatherForecast = async (
  location: IUseGetWeatherForecastParams["location"],
  days: IUseGetWeatherForecastParams["days"]
) => {
  const response = await getData(`${API_PATHS.WEATHER.GET_FORECAST}`, [
    location,
    String(days),
  ]);

  return response;
};
