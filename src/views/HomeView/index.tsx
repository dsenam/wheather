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
      <GoogleMapsAutocomplete
        handleSelectPlace={props.handleSelectPlace}
        location={props.location}
        label={props.autocompleteText}
      />

      <Switch
        isSelected={props.isSelected}
        setIsSelected={props.setIsSelected}
        label={props.switchLabel}
      />

      <DisplayCard
        headerText={props.headerText}
        arrSecondaryInfos={props.arrSecondaryInfos}
        imageAlt={props.imageAlt}
        imageSrc={props.imageSrc}
        isLoading={props.isLoading}
        mainText={props.mainText}
      />

      <StyledHomeViewForecastContainer>
        {props?.dataForecast?.map((forecastDay) => (
          <DisplayForecast
            key={forecastDay.date}
            headerText={formatDate(forecastDay.date)}
            imageSrc={`https:${forecastDay.day.condition.icon}`}
            imageAlt={`alt ${forecastDay.day.condition.text}`}
            mainText={`${
              props.isCelsius
                ? forecastDay.day.avgtemp_c
                : forecastDay.day.avgtemp_f
            } º`}
          />
        ))}
      </StyledHomeViewForecastContainer>
    </StyledHomeViewContainer>
  );
};

export default HomeView;
