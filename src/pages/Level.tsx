import { useParams } from "react-router-dom";
import Logo from "@/assets/svgs/logo.svg";
import LogoBonus from "@/assets/svgs/logo-bonus.svg";
import BgTriangle from "@/assets/svgs/bg-triangle.svg";
import BgPentagon from "@/assets/svgs/bg-pentagon.svg";
import { originalHands, advancedHands } from "@/utils/Constants";
import { CircleHand } from "@/components/CircleHand";
import HandType from "@/utils/enums/HandType";
import { getRandomInt, checkUserGameResult } from "@/utils/Functions";
import GameResult from "@/utils/enums/GameResult";
import { useState } from "react";

const Level = () => {
    const { level } = useParams()
    const [score, setScore] = useState<number>(0)
    const hands = level == "advanced" ? advancedHands : originalHands

    const didTapHand = (userHandType: HandType) => {
        const randomInt = getRandomInt(hands.length)
        const cpuHandType = hands[randomInt].type
        console.log("user: " + userHandType.toString())
        console.log("cpu: " + cpuHandType.toString())
        const userGameResult = checkUserGameResult(userHandType, cpuHandType)
        switch (userGameResult) {
            case GameResult.win:
                setScore( (lastState) => lastState + 1)
                console.log("You win!")
                break
            case GameResult.draw:
                console.log("Draw")
                break
            case GameResult.lose:
                setScore(0)
                console.log("You lose!")
        }
    }

    return (
        <>
        <header className="flex flex-row p-5 justify-between items-center gap-4 border-2 border-gray rounded-xl m-5">
            <img className="w-32" src={level == "advanced" ? LogoBonus : Logo}/>
            <section className="flex flex-col justify-center items-center bg-white xs:px-8 px-4 py-2 rounded-xl">
                <h2 className="font-semibold text-xs text-blue-500 tracking-widest">SCORE</h2>
                <p className="text-5xl font-bold text-black">{score}</p>
            </section>
        </header>
        <div className="relative w-[60%] mx-auto mt-32">
            <img className="w-full" src={level == "advanced" ? BgPentagon : BgTriangle}/>
            {
                hands.map( ({type, icon, position}) => {
                    return (
                        <CircleHand key={`${level}-${type}`} onclick={() => didTapHand(type)} position={position}>
                            <img className="w-[40%]" src={icon}/>
                        </CircleHand>
                    )
                })
            }
        </div>
        </>
    )
}

export default Level