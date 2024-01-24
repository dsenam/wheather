import { ReactElement } from "react";

type TSecondaryInfo = {
    id: number
    icon: ReactElement
    value: string | number | undefined
}

export interface IDisplayCardProps {
  imageSrc: string;
  imageAlt: string;
  headerText: string;
  mainText: string;
  arrSecondaryInfos: Array<TSecondaryInfo>;
  isLoading: boolean
}
