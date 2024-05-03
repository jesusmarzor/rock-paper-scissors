import PositionElement from "@/utils/enums/PositionElement"
import { ReactElement } from "react"

interface Props {
	position: PositionElement
	onclick: () => void
    children: ReactElement
}

export const CircleHand: React.FC<Props> = ({position, onclick, children}) => {
    let classes = ""
    switch (position) {
        case PositionElement.top:
            classes = "-top-[20%] left-0 right-0 mx-auto border-hand-first"
            break
        case PositionElement.topLeft:
            classes = "-top-10 -left-5 border-hand-first"
            break
        case PositionElement.topRight:
            classes = "-top-10 -right-5 border-hand-second"
            break
        case PositionElement.middleLeft:
            classes = "top-[15%] -left-[20%] border-hand-fifth"
            break
        case PositionElement.middleRight:
            classes = "top-[15%] -right-[20%] border-hand-second"
            break
        case PositionElement.bottom:
            classes = "bottom-0 left-0 right-0 mx-auto border-hand-third"
            break
        case PositionElement.bottomLeft:
            classes = "-bottom-[20%] -left-[5%] border-hand-fourth"
            break
        case PositionElement.bottomRight:
            classes = "-bottom-[20%] -right-[5%] border-hand-third"
            break
    }
    return (
        <button onClick={onclick} className={`absolute ${classes} transition-transform flex justify-center items-center w-[45%] aspect-square border-[0.8rem] xs:border-[1.3rem] shadow-[inset_0_5px_0px_0px_rgba(0,0,0,0.2)] rounded-full bg-white`}>
            {children}
        </button>
    )
}