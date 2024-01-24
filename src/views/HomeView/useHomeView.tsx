"use client";
import { TPlace } from "@/components/GoogleMapsAutocomplete/types";
import {
  useGetWeatherForecast,
  useGetWeatherInfos,
} from "@/hooks/api/useWeatherApi";
import {
  getCurrentLocation,
  showPosition,
  showPositionError,
} from "@/utils/helpersFunctions/getPosition";
import { useEffect, useState } from "react";
import { FaWater, FaCloud, FaWind } from "react-icons/fa";
import { useTheme } from "styled-components";

export const useHomeView = () => {
  const [location, setLocation] = useState("");
  const [manualLoading, setManualLoading] = useState(true);
  const [isCelsius, setIsCelsius] = useState(true);
  const theme = useTheme();

  const { data: dataWeather, isLoading: isLoadingWeatherRequest } =
    useGetWeatherInfos({
      location,
    });

  const { data: dataForecast, isLoading: isLoadingWeatherForecast } =
    useGetWeatherForecast({ location, days: 5 });

  const arrSecondaryInfos = [
    {
      id: 1,
      icon: <FaCloud color={theme.colors.primary} />,
      value: dataWeather?.current.condition.text,
    },
    {
      id: 2,
      icon: <FaWater color={theme.colors.primary} />,
      value: `${dataWeather?.current.humidity} % `,
    },

    {
      id: 3,
      icon: <FaWind color={theme.colors.primary} />,
      value: `${dataWeather?.current.wind_kph} km/h`,
    },
  ];

  const handleSelectPlace = (place: TPlace) => {
    const cityName = place.address_components[0].long_name;
    setLocation(cityName);
  };

  const headerText = `${dataWeather?.location.name}, ${dataWeather?.location.region}, ${dataWeather?.location.country}`;
  const imageAlt = `icon ${dataWeather?.current.condition.text}`;
  const imageSrc = `https:${dataWeather?.current.condition.icon}`;
  const mainText = `${dataWeather?.current.temp_c} º`;
  const isLoading =
    isLoadingWeatherRequest || manualLoading || isLoadingWeatherForecast;
  const switchLabel = isCelsius ? "Celsius" : "Fahrenheit"

  const handlePositionStart = async () => {
    try {
      setManualLoading(true);
      const position = await getCurrentLocation();
      const { latitude, longitude } = await showPosition(position as TPosition);
      const formatLocation = `${latitude}, ${longitude}`;
      setLocation(formatLocation);
      setManualLoading(false);
    } catch (error) {
      showPositionError(error as TError);
    }
  };

  useEffect(() => {
    handlePositionStart();
  }, []);

  return {
    arrSecondaryInfos,
    headerText,
    imageAlt,
    imageSrc,
    mainText,
    isLoading,
    handleSelectPlace,
    location,
    dataForecast: dataForecast?.forecast.forecastday,
    isSelected: isCelsius,
    setIsSelected: setIsCelsius,
    switchLabel
  };
};
