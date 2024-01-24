import React from "react";
import { StyledDisplayForecastContainer } from "./styles";
import Image from "next/image";
import SkeletonDisplayCard from "../SkeletonDisplayCard";

const DisplayForecast = ({
  imageSrc,
  imageAlt,
  isLoading,
  headerText,
  mainText,
}: IDisplayForecastProps) => {
 
  return (
    <StyledDisplayForecastContainer>
      <p>{headerText}</p>
      <h1>{mainText}</h1>
      <Image
        src={imageSrc || ""}
        width={20}
        height={20}
        alt={imageAlt}
        priority
      />
    </StyledDisplayForecastContainer>
  );
};

export default DisplayForecast;
