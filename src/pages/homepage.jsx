import Header from "src/components/header"
import ExploreButton from 'src/components/explore-btn'
import { NavLink } from "react-router-dom"

export default function Homepage(){
    return (
        <section className="bg-[url('./assets/home/background-home-desktop.jpg')] h-screen w-full bg-[#d3d3d3] max-h-full box-border mix-blend-screen">
            <Header />

            <div className="uppercase w-[450px] h-[382px] absolute left-[100px] top-[180px]">
                <h2 className="text-[#D0D6F9] text-[28px] font-barlow-cond tracking-[4.725px]">so, you want to travel to</h2>
                <h1 className="text-white text-[150px] font-belle">space</h1>
                <p className="normal-case w-[444px] text-[#D0D6F9] text-[18px] font-barlow leading-[32px]">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>

            <ExploreButton />
        </section>
    )
}