import DisplayCard from "@/components/DisplayCard";
import React from "react";
import { useHomeView } from "./useHomeView";
import GoogleMapsAutocomplete from "@/components/GoogleMapsAutocomplete";
import {
  StyledHomeViewContainer,
  StyledHomeViewForecastContainer,
} from "./styles";
import DisplayForecast from "@/components/DisplayForecast";
import { formatDate } from "@/utils/helpersFunctions/formatDate";
import Switch from "@/components/Switch";

const HomeView: React.FC = () => {
  const props = useHomeView();

  return (
    <StyledHomeViewContainer>
      <GoogleMapsAutocomplete {...props} />
      <Switch isSelected={props.isSelected} setIsSelected={props.setIsSelected} label={props.switchLabel} />
      <StyledHomeViewForecastContainer>
        {props?.dataForecast?.map((forecastDay) => (
          <DisplayForecast
            key={forecastDay.date}
            headerText={formatDate(forecastDay.date)}
            imageSrc={`https://${forecastDay.day.condition.icon}`}
            imageAlt={`alt ${forecastDay.day.condition.text}`}
            isLoading={props.isLoading}
            mainText={`${forecastDay.day.avgtemp_c} º`}
          />
        ))}
      </StyledHomeViewForecastContainer>
      <DisplayCard {...props} />
    </StyledHomeViewContainer>
  );
};

export default HomeView;
