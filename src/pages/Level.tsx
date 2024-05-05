import { useParams } from "react-router-dom";
import Logo from "@/assets/svgs/logo.svg";
import LogoBonus from "@/assets/svgs/logo-bonus.svg";
import BgTriangle from "@/assets/svgs/bg-triangle.svg";
import GameResult from "@/utils/enums/GameResult";
import BgPentagon from "@/assets/svgs/bg-pentagon.svg";
import { originalHands, advancedHands } from "@/utils/Constants";
import { CircleHand } from "@/components/CircleHand";
import { getRandomInt, checkUserGameResult } from "@/utils/Functions";
import { Hand } from "@/utils/types/Hand";
import { useEffect, useRef, useState } from "react";
import RulesOriginal from "@/assets/svgs/image-rules.svg";
import RulesBonus from "@/assets/svgs/image-rules-bonus.svg";
import CloseIcon from "@/assets/svgs/icon-close.svg"

const Level = () => {
    const { level } = useParams()
    const [score, setScore] = useState<number>(0)
    const hands = level == "advanced" ? advancedHands : originalHands
    const rules = level == "advanced" ? RulesBonus : RulesOriginal
    const [handSelected, setHandSelected] = useState<Hand | null>()
    const [cpuHandSelected, setCpuHandSelected] = useState<Hand | null>()
    const [resultMessage, setResultMessage] = useState<string | null>()
    const [counter, setCounter] = useState<number>(0)
    const interval = useRef<NodeJS.Timeout>();
    const [isOpenedRules, setIsOpenedRules] = useState<boolean>(false)

    useEffect(() => {
        const handleTimer = () => {
            interval.current = setInterval( () => {
                setCounter((count) => count - 1);
            }, 1000);
        }

        if (counter <=  0 && interval.current) {
            clearInterval(interval.current);
        }
        if (counter === 3) {
            handleTimer();
        }
    }, [counter]);

    const didTapHand = (userHand: Hand) => {
        setCounter(3)
        setHandSelected(userHand)
        const randomInt = getRandomInt(hands.length)
        const cpuHand = hands[randomInt]
        setTimeout( () => {
            setCpuHandSelected(cpuHand)
            const userGameResult = checkUserGameResult(userHand.type, cpuHand.type)
            switch (userGameResult) {
                case GameResult.win:
                    setScore( (lastState) => lastState + 1)
                    setResultMessage("You win!")
                    break
                case GameResult.draw:
                    setResultMessage("Draw")
                    break
                case GameResult.lose:
                    setScore(0)
                    setResultMessage("You lose!")
            }
        }, 3000)
    }

    const didTapPlayAgain = () => {
        setHandSelected(null)
        setCpuHandSelected(null)
        setResultMessage(null)
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
            <div className={`relative w-[60%] mx-auto ${handSelected != null ? "opacity-0 h-0 m-0 pointer-events-none": "opacity-100 pointer-events-auto h-auto mt-32 transition-opacity ease-in duration-150"}`}>
            
                <img className="w-full" src={level == "advanced" ? BgPentagon : BgTriangle}/>
                {
                    hands.map( hand => {
                        return (
                            <CircleHand classes={`${hand.color} w-[45%] border-[0.8rem] xs:border-[1.3rem]`} key={`${level}-${hand.type}`} onclick={() => didTapHand(hand)} position={hand.position}>
                                <img className="w-[40%]" src={hand.icon}/>
                            </CircleHand>
                        )
                    })
                }
            </div>
            <div className={`flex flex-col sm:flex-row justify-center items-center w-full my-4 sm:my-24 gap-8 ${handSelected == null ? "opacity-0 h-0 m-0 pointer-events-none" : "opacity-100 pointer-events-auto h-auto transition-opacity ease-in duration-150"}`}>
                <div className="flex flex-col justify-center items-center w-44 sm:w-1/3 gap-4">
                    <p className="text-white font-bold text-xl tracking-wider uppercase">You picked</p>
                    <CircleHand classes={`${handSelected?.color} w-full border-[1.3rem]`}>
                        <img className="w-[40%]" src={handSelected?.icon}/>
                    </CircleHand>
                </div>
                <div className={`flex flex-col justify-center items-center gap-4 ${resultMessage == null ? "opacity-0 h-0 w-0 m-0 pointer-events-none" : "opacity-100 pointer-events-auto h-auto w-auto transition-opacity ease-in duration-150"}`}>
                    <p className="text-white font-bold text-3xl">{resultMessage}</p>
                    <button className="rounded-xl py-3 w-32 bg-white text-blue-900" onClick={didTapPlayAgain}>Play again</button>
                </div>
                <div className="flex flex-col justify-center items-center w-44 sm:w-1/3 gap-4">
                    <p className="text-white font-bold text-xl tracking-wider uppercase">CPU picked</p>
                    <CircleHand classes={`${cpuHandSelected?.color ?? "border-white"} w-full border-[1.3rem]`}>
                        { cpuHandSelected == null
                            ? <p className="text-5xl font-bold text-blue-900">{counter}</p>
                            : <img className="w-[40%]" src={cpuHandSelected?.icon}/>
                        }
                    </CircleHand>
                </div>
            </div>
            <button onClick={() => setIsOpenedRules(true)} className={`my-24 ml-auto mr-8 rounded-xl flex justify-center items-center before:ease relative w-44 overflow-hidden border border-hand-first text-hand-first shadow-2xl before:absolute before:top-1/2 before:h-0 before:w-72 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-hand-first before:duration-300 hover:text-white hover:shadow-hand-first hover:before:h-80 hover:before:-translate-y-32 ${handSelected != null ? "opacity-0 h-0 m-0 pointer-events-none" : "opacity-100 pointer-events-auto h-16 transition-opacity ease-in duration-150"}`}>
                <span className="relative z-10 font-semibold">Rules</span>
            </button>
            <div className={`z-10 fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-[#000]/40 ${isOpenedRules ? "opacity-100 pointer-events-auto h-auto transition-opacity ease-in duration-150" : "opacity-0 h-0 m-0 pointer-events-none"}`}>
                <div className="flex flex-col justify-center items-center gap-4 p-6 bg-white rounded-xl m-4">
                    <header className="flex justify-between items-center w-full">
                        <p className="uppercase text-blue-900 tracking-wider font-semibold">Rules</p>
                        <button onClick={() => setIsOpenedRules(false)}>
                            <img src={CloseIcon} width={15}/>
                        </button>
                    </header>
                    <img className="w-full" src={rules}/>
                </div>
            </div>
        </>
    )
}

export default Level