import { CircleHand } from "./CircleHand"

interface Props {
    title: string
    handClasses?: string
    icon?: string
    counter?: number
}

export const SelectedHand: React.FC<Props> = ({title, handClasses, icon, counter}) => {
    return (
        <section className="flex flex-col justify-center items-center w-44 sm:w-1/3 gap-4">
            <h2 className="text-white font-bold text-xl tracking-wider uppercase">{title}</h2>
            <CircleHand classes={`${handClasses} w-full border-[1.3rem]`}>
                { icon == null
                    ? <p className="text-5xl font-bold text-blue-900">{counter}</p>
                    : <img className="w-[40%]" src={icon}/>
                }
            </CircleHand>
        </section>
    )
}