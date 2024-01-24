import React from "react";
import Skeleton from "../Skeleton";
import { StyledDisplayCardContainer } from "../DisplayCard/styles";

const SkeletonDisplayCard = ({lines}: ISkeletonDisplayCardProps) => {
  return (
    <StyledDisplayCardContainer data-testid="skeleton-display-card">
      {Array.from({ length: lines }, (_, index) => (
        <Skeleton key={index} />
      ))}
    </StyledDisplayCardContainer>
  );
};

export default SkeletonDisplayCard;
