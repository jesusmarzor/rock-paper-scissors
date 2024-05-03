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
        position: PositionElement.topLeft
    },
    {
        type: HandType.scissor,
        icon: IconScissors,
        position: PositionElement.topRight
    },
    {
        type: HandType.rock,
        icon: IconRock,
        position: PositionElement.bottom
    }
]

export const advancedHands: Array<Hand> = [
    {
        type: HandType.paper,
        icon: IconPaper,
        position: PositionElement.top
    },
    {
        type: HandType.scissor,
        icon: IconScissors,
        position: PositionElement.middleRight
    },
    {
        type: HandType.rock,
        icon: IconRock,
        position: PositionElement.bottomRight
    },
    {
        type: HandType.lizard,
        icon: IconLizard,
        position: PositionElement.bottomLeft
    },
    {
        type: HandType.spock,
        icon: IconSpock,
        position: PositionElement.middleLeft
    }
]