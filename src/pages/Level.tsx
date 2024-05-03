import { useParams } from "react-router-dom";
import Logo from "@/assets/svgs/logo.svg";
import LogoBonus from "@/assets/svgs/logo-bonus.svg";

const Level = () => {
    const { level } = useParams()
    return (
        <>
        <header className="flex flex-row p-5 justify-between items-center border-2 border-gray rounded-xl m-5">
            <img src={level == "advanced" ? LogoBonus : Logo} width={120}/>
            <section className="flex flex-col justify-center items-center bg-white px-8 py-2 rounded-xl">
                <h2 className="font-semibold text-xs text-blue-500 tracking-widest">SCORE</h2>
                <p className="text-5xl font-bold text-black">2</p>
            </section>
        </header>
        <p>{level}</p>
        </>
    )
}

export default Level