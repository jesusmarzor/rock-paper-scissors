import type HandType from "@/utils/enums/HandType"
import type PositionElement from "@/utils/enums/PositionElement"

export type Hand = {
    type: HandType,
    icon: string,
    position: PositionElement
}