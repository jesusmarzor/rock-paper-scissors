import CloseIcon from "@/assets/svgs/icon-close.svg"

interface Props {
    isOpened: boolean
    setIsOpen: (arg0: boolean) => void
    rules: string
}

export const ModalRules: React.FC<Props> = ({isOpened, setIsOpen, rules}) => {
    return (
        <div className={`z-10 fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-[#000]/40 ${isOpened ? "opacity-100 pointer-events-auto h-auto transition-opacity ease-in duration-150" : "opacity-0 h-0 m-0 pointer-events-none"}`}>
            <div className="flex flex-col justify-center items-center gap-4 p-6 bg-white rounded-xl m-8">
                <header className="flex justify-between items-center w-full">
                    <p className="uppercase text-blue-900 tracking-wider font-semibold">Rules</p>
                    <button onClick={() => setIsOpen(false)}>
                        <img src={CloseIcon} width={15}/>
                    </button>
                </header>
                <img className="w-full" src={rules}/>
            </div>
        </div>
    )
}