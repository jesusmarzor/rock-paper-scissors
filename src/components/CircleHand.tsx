import PositionElement from "@/utils/enums/PositionElement"
import { ReactElement } from "react"

interface Props {
    classes?: string
	position?: PositionElement
	onclick?: () => void
    children: ReactElement
}

export const CircleHand: React.FC<Props> = ({classes = "", position, onclick, children}) => {
    switch (position) {
        case PositionElement.top:
            classes += " absolute -top-[20%] left-0 right-0 mx-auto"
            break
        case PositionElement.topLeft:
            classes += " absolute -top-10 -left-5"
            break
        case PositionElement.topRight:
            classes += " absolute -top-10 -right-5"
            break
        case PositionElement.middleLeft:
            classes += " absolute top-[15%] -left-[20%] border-hand-fifth"
            break
        case PositionElement.middleRight:
            classes += " absolute top-[15%] -right-[20%] border-hand-second"
            break
        case PositionElement.bottom:
            classes += " absolute bottom-0 left-0 right-0 mx-auto border-hand-third"
            break
        case PositionElement.bottomLeft:
            classes += " absolute -bottom-[20%] -left-[5%] border-hand-fourth"
            break
        case PositionElement.bottomRight:
            classes += " absolute -bottom-[20%] -right-[5%] border-hand-third"
            break
    }
    return (
        <button onClick={onclick} className={`${classes} transition-transform flex justify-center items-center aspect-square shadow-[inset_0_5px_0px_0px_rgba(0,0,0,0.2)] rounded-full bg-white`}>
            {children}
        </button>
    )
}