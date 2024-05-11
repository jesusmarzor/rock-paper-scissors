import { checkUserGameResult, getRandomInt } from "@/utils/Functions"
import GameResult from "@/utils/enums/GameResult"
import { Hand } from "@/utils/types/Hand"
import { useState } from "react"

interface Props {
    setCounter: (arg0: number) => void,
    hands: Hand[]
}

const useGame = ({setCounter, hands}: Props) => {
    const [score, setScore] = useState<number>(0)
    const [handSelected, setHandSelected] = useState<Hand | null>()
    const [cpuHandSelected, setCpuHandSelected] = useState<Hand | null>()
    const [resultMessage, setResultMessage] = useState<string | null>()

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

    return {
        score,
        handSelected,
        cpuHandSelected,
        resultMessage,
        didTapHand,
        didTapPlayAgain
    }
}

export default useGame