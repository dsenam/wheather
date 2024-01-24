import { UseQueryResult, useQuery } from "@tanstack/react-query";
import type { IWeatherApiResponse, IUseGetWeatherParams, IUseGetWeatherForecastParams, IWeatherForecastApiResponse } from "./types";
import { QUERY_KEYS } from "@/utils/constants/queryKeys.constants";
import { requestGetWeatherForecast, requestGetWeatherInfo } from "./requests";

export const useGetWeatherInfos = (
  params: IUseGetWeatherParams
): UseQueryResult<IWeatherApiResponse> => {
  const { location } = params;

  return useQuery({
    queryKey: [QUERY_KEYS.useGetWeatherInfos, location],
    queryFn: async () => {
      const response = requestGetWeatherInfo(location);
      return response;
    },
    enabled: !!location,
  });
};

export const useGetWeatherForecast = (
  params: IUseGetWeatherForecastParams
): UseQueryResult<IWeatherForecastApiResponse> => {
  const { location, days } = params;

  return useQuery({
    queryKey: [QUERY_KEYS.useGetWeatherForecast, location, days],
    queryFn: async () => {
      const response = requestGetWeatherForecast(location, days);
      return response;
    },
    enabled: !!location && !!days,
  });
};



