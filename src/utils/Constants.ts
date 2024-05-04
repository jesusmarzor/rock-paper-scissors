import IconRock from '@/assets/svgs/icon-rock.svg';
import IconPaper from '@/assets/svgs/icon-paper.svg';
import IconScissors from '@/assets/svgs/icon-scissors.svg';
import IconLizard from '@/assets/svgs/icon-lizard.svg';
import IconSpock from '@/assets/svgs/icon-spock.svg';
import PositionElement from '@/utils/enums/PositionElement';
import type { Hand } from '@/utils/types/Hand';
import HandType from '@/utils/enums/HandType';

export const originalHands: Array<Hand> = [
    {
        type: HandType.paper,
        icon: IconPaper,
        position: PositionElement.topLeft,
        color: "border-hand-first"
    },
    {
        type: HandType.scissor,
        icon: IconScissors,
        position: PositionElement.topRight,
        color: "border-hand-second"
    },
    {
        type: HandType.rock,
        icon: IconRock,
        position: PositionElement.bottom,
        color: "border-hand-third"
    }
]

export const advancedHands: Array<Hand> = [
    {
        type: HandType.paper,
        icon: IconPaper,
        position: PositionElement.top,
        color: "border-hand-first"
    },
    {
        type: HandType.scissor,
        icon: IconScissors,
        position: PositionElement.middleRight,
        color: "border-hand-second"
    },
    {
        type: HandType.rock,
        icon: IconRock,
        position: PositionElement.bottomRight,
        color: "border-hand-third"
    },
    {
        type: HandType.lizard,
        icon: IconLizard,
        position: PositionElement.bottomLeft,
        color: "border-hand-fourth"
    },
    {
        type: HandType.spock,
        icon: IconSpock,
        position: PositionElement.middleLeft,
        color: "border-hand-fifth"
    }
]