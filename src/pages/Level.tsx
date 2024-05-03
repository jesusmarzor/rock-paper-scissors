import { useParams } from "react-router-dom";
import Logo from "@/assets/svgs/logo.svg";
import LogoBonus from "@/assets/svgs/logo-bonus.svg";
import BgTriangle from "@/assets/svgs/bg-triangle.svg";
import BgPentagon from "@/assets/svgs/bg-pentagon.svg";
import { originalHands, advancedHands } from "@/utils/Constants";
import { CircleHand } from "@/components/CircleHand";

const Level = () => {
    const { level } = useParams()
    const hands = level == "advanced" ? advancedHands : originalHands
    return (
        <>
        <header className="flex flex-row p-5 justify-between items-center border-2 border-gray rounded-xl m-5">
            <img src={level == "advanced" ? LogoBonus : Logo} width={120}/>
            <section className="flex flex-col justify-center items-center bg-white px-8 py-2 rounded-xl">
                <h2 className="font-semibold text-xs text-blue-500 tracking-widest">SCORE</h2>
                <p className="text-5xl font-bold text-black">2</p>
            </section>
        </header>
        <div className="relative w-[60%] mx-auto mt-24">
            <img className="w-full" src={level == "advanced" ? BgPentagon : BgTriangle}/>
            {
                hands.map( ({type, icon, position}) => {
                    return (
                        <CircleHand key={`${level}-${type}`} type={type} position={position}>
                            <img src={icon}/>
                        </CircleHand>
                    )
                })
            }
        </div>
        </>
    )
}

export default Level