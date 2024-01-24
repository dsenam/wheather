import React from "react";
import Skeleton from "../Skeleton";
import { StyledDisplayCardContainer } from "../DisplayCard/styles";

const SkeletonDisplayCard = ({lines}: ISkeletonDisplayCardProps) => {
  return (
    <StyledDisplayCardContainer>
      {Array.from({ length: lines }, (_, index) => (
        <Skeleton key={index} />
      ))}
    </StyledDisplayCardContainer>
  );
};

export default SkeletonDisplayCard;
