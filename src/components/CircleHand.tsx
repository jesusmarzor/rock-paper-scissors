import HandType from "@/utils/enums/HandType"
import PositionElement from "@/utils/enums/PositionElement"
import { ReactElement } from "react"

interface Props {
	position: PositionElement
	type: HandType
    children: ReactElement
}

export const CircleHand: React.FC<Props> = ({position, type, children}) => {
    let classes = ""
    switch (position) {
        case PositionElement.top:
            classes = "-top-16 left-0 right-0 mx-auto border-hand-first"
            break
        case PositionElement.topLeft:
            classes = "-top-10 -left-5 border-hand-first"
            break
        case PositionElement.topRight:
            classes = "-top-10 -right-5 border-hand-second"
            break
        case PositionElement.middleLeft:
            classes = "top-10 -left-16 border-hand-fifth"
            break
        case PositionElement.middleRight:
            classes = "top-10 -right-16 border-hand-second"
            break
        case PositionElement.bottom:
            classes = "bottom-0 left-0 right-0 mx-auto border-hand-third"
            break
        case PositionElement.bottomLeft:
            classes = "-bottom-12 -left-2 border-hand-fourth"
            break
        case PositionElement.bottomRight:
            classes = "-bottom-12 -right-2 border-hand-third"
            break
    }
    return (
        <button onClick={() => console.log(type)} className={`absolute ${classes} transition-transform flex justify-center items-center w-40 h-40 border-[1.2rem] shadow-[inset_0_5px_0px_0px_rgba(0,0,0,0.2)] rounded-full bg-white`}>
            {children}
        </button>
    )
}