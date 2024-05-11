import { useParams } from "react-router-dom";
import { originalHands, advancedHands } from "@/utils/Constants";
import { CircleHand } from "@/components/CircleHand";
import { SelectedHand } from "@/components/SelectedHand";
import { ModalRules } from "@/components/ModalRules";
import Logo from "@/assets/svgs/logo.svg";
import LogoBonus from "@/assets/svgs/logo-bonus.svg";
import BgTriangle from "@/assets/svgs/bg-triangle.svg";
import BgPentagon from "@/assets/svgs/bg-pentagon.svg";
import RulesOriginal from "@/assets/svgs/image-rules.svg";
import RulesBonus from "@/assets/svgs/image-rules-bonus.svg";
import LevelType from "@/utils/enums/LevelType";
import useModalRules from "@/hooks/useModalRules";
import useCpuCounter from "@/hooks/useCpuCounter";
import useGame from "@/hooks/useGame";

const Level = () => {
    const { level } = useParams()
    const hands = (level == LevelType.advanced) ? advancedHands : originalHands
    const rules = (level == LevelType.advanced) ? RulesBonus : RulesOriginal
    const { counter, setCounter } = useCpuCounter()
    const {
        score,
        handSelected,
        cpuHandSelected,
        resultMessage,
        didTapHand,
        didTapPlayAgain
    } = useGame({setCounter, hands})
    const { isOpenedRules, setIsOpenedRules } = useModalRules()

    return (
        <>
        <header className="flex flex-row p-5 justify-between items-center gap-4 border-2 border-gray rounded-xl m-5">
            <img className="w-32" src={(level == LevelType.advanced) ? LogoBonus : Logo}/>
            <section className="flex flex-col justify-center items-center bg-white xs:px-8 px-4 py-2 rounded-xl">
                <h2 className="font-semibold text-xs text-blue-500 tracking-widest">SCORE</h2>
                <p className="text-5xl font-bold text-black">{score}</p>
            </section>
        </header>
            <div className={`relative w-[60%] mx-auto ${handSelected != null ? "opacity-0 h-0 m-0 pointer-events-none": "opacity-100 pointer-events-auto h-auto mt-32 transition-opacity ease-in duration-150"}`}>
                <img className="w-full" src={(level == LevelType.advanced) ? BgPentagon : BgTriangle}/>
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
                <SelectedHand title="You picked" handClasses={handSelected?.color} icon={handSelected?.icon}/>
                <div className={`flex flex-col justify-center items-center gap-4 ${resultMessage == null ? "opacity-0 h-0 w-0 m-0 pointer-events-none" : "opacity-100 pointer-events-auto h-auto w-auto transition-opacity ease-in duration-150"}`}>
                    <p className="text-white font-bold text-3xl">{resultMessage}</p>
                    <button className="rounded-xl py-3 w-32 bg-white text-blue-900" onClick={didTapPlayAgain}>Play again</button>
                </div>
                <SelectedHand title="CPU picked" handClasses={`${cpuHandSelected?.color ?? "border-white"}`} icon={cpuHandSelected?.icon} counter={counter}/>
            </div>
            <button onClick={() => setIsOpenedRules(true)} className={`my-24 ml-auto mr-8 rounded-xl flex justify-center items-center before:ease relative w-44 overflow-hidden border border-hand-first text-hand-first shadow-2xl before:absolute before:top-1/2 before:h-0 before:w-72 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-hand-first before:duration-300 hover:text-white hover:shadow-hand-first hover:before:h-80 hover:before:-translate-y-32 ${handSelected != null ? "opacity-0 h-0 m-0 pointer-events-none" : "opacity-100 pointer-events-auto h-16 transition-opacity ease-in duration-150"}`}>
                <span className="relative z-10 font-semibold">Rules</span>
            </button>
            <ModalRules isOpened={isOpenedRules} setIsOpen={setIsOpenedRules} rules={rules}/>
        </>
    )
}

export default Level