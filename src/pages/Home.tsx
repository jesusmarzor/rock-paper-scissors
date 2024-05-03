const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <section className="flex flex-col justify-center items-center gap-8">
                <h1 className="drop-shadow-xl m-5 text-5xl text-center tracking-widest leading-tight font-bold text-white">Rock, paper and scissors</h1>
                <a href="/original" className="rounded-xl flex justify-center items-center before:ease relative h-16 w-44 overflow-hidden border border-hand-fifth text-hand-fifth shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-72 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-hand-fifth before:duration-300 hover:text-white hover:shadow-hand-fifth hover:before:h-80 hover:before:-translate-y-32">
                    <span className="relative z-10 font-semibold">Original</span>
                </a>
                <a href="/advanced" className="rounded-xl flex justify-center items-center before:ease relative h-16 w-44 overflow-hidden border border-hand-third text-hand-third shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-72 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-hand-third before:duration-300 hover:text-white hover:shadow-hand-third hover:before:h-80 hover:before:-translate-y-32">
                    <span className="relative z-10 font-semibold">Advanced</span>
                </a>
            </section>
        </div>
    )
}

export default Home