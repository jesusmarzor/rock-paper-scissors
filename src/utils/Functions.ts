import GameResult from "./enums/GameResult";
import HandType from "./enums/HandType";

export const getRandomInt = (max: number) => Math.floor(Math.random() * max)

export const checkUserGameResult = (userType: HandType, cpuType: HandType): GameResult => {
    if (userType == cpuType) {
        return GameResult.draw
    } else if (
        userType == HandType.rock && (cpuType == HandType.scissor || cpuType == HandType.lizard) ||
        userType == HandType.paper && (cpuType == HandType.rock || cpuType == HandType.spock) ||
        userType == HandType.scissor && (cpuType == HandType.lizard || cpuType == HandType.paper) ||
        userType == HandType.lizard && (cpuType == HandType.paper || cpuType == HandType.spock) ||
        userType == HandType.spock && (cpuType == HandType.scissor || cpuType == HandType.rock)
    ) {
        return GameResult.win
    }
    return GameResult.lose
}