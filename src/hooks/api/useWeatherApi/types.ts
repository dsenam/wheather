export interface IUseGetWeatherParams {
  location: string;
}

export interface IUseGetWeatherForecastParams {
  location: string;
  days: number;
}

export interface IWeatherApiResponse {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };
  current: {
    last_updated: string;
    temp_c: number;
    temp_f: number;

    condition: {
      text: string;
      icon: string;
    };
    wind_kph: number;
    humidity: number;
  };
}

export interface IWeatherForecastApiResponse {
  forecast: {
    forecastday: Array<{
      date: string;
      
      day: {
        avgtemp_c: string;
        condition: {
          text: string
          icon: string;
        };
      };
    }>;
  };
}
