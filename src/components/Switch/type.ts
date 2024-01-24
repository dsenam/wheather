import { Dispatch, SetStateAction } from "react"

export interface ISwitchProps {
    isSelected: boolean
    setIsSelected: Dispatch<SetStateAction<boolean>>
    label: string
}