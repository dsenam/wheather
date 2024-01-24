import {
  StyledDisplayCardAlign,
  StyledDisplayCardContainer,
  StyledDisplayCardMain,
  StyledDisplayCardSection,
} from "./styles";
import Image from "next/image";
import type { IDisplayCardProps } from "./types";
import SkeletonDisplayCard from "../SkeletonDisplayCard";

const DisplayCard = ({
  imageSrc,
  imageAlt,
  headerText,
  mainText,
  arrSecondaryInfos,
  isLoading,
}: IDisplayCardProps) => {
  if (isLoading) {
    return (
      <SkeletonDisplayCard  lines={4} />
    );
  }

  return (
    <StyledDisplayCardContainer>
      <p>{headerText}</p>
      <StyledDisplayCardMain>
        <StyledDisplayCardAlign>
          <h1>{mainText}</h1>

          <Image
            src={imageSrc || ""}
            width={64}
            height={64}
            alt={imageAlt}
            priority
          />
        </StyledDisplayCardAlign>
        <StyledDisplayCardSection>
          {arrSecondaryInfos.map((info) => (
            <div key={info.id}>
              {info.icon}
              <h2>{info.value}</h2>
            </div>
          ))}
        </StyledDisplayCardSection>
      </StyledDisplayCardMain>
    </StyledDisplayCardContainer>
  );
};

export default DisplayCard;
