import { useState, useContext } from "react"
import { PageContext } from "src/Context/contextProvider"
import * as data from 'src/data'
import Header from "src/components/header"


export default function Crew() {
    const [crewData, setCrewData] = useState(data.crew[0])

    const numbers = [1, 2, 3, 4]

    return (
        <section className="bg-[url('src/assets/crew/background-crew-desktop.jpg')] h-[896px] w-full">
            <Header/>
            <div className='flex uppercase font-barlow-cond text-[28px] gap-x-[28px] text-white absolute top-[243px] left-[166.73px] '><span className='opacity-[0.25]'>02</span><span>Meet your crew</span></div>
            
            <section className="absolute top-[431px] left-[165.73px] ">
                <h3 className="w-fit h-fit font-belle text-white text-[32px] uppercase opacity-[0.5042] ">{crewData ? crewData.role : ''}</h3>
                <h2 className="w-fit h-fit font-belle text-[56px] text-white uppercase">{crewData ? crewData.name : ''}</h2>
                <p className="font-barlow text-[18px] text-[#D0D6F9] leading-[32px] w-[444px] h-[128px] ">{crewData ? crewData.bio : ''}</p>
            </section>
            
            <section className="slider-buttons w-[132px] h-[15px] flex justify-between absolute top-[802px] left-[167.23px] ">
                {numbers.map((number) => {
                    return (
                        <button 
                        key={number}
                        onClick={() => {setCrewData(data.crew[number - 1])}}
                        className="w-[15px] h-[15px] rounded-full opacity-[0.174363] bg-white " />
                    )
                })}
            </section>

            <section className="crew-img w-[453.44px] h-fit absolute top-[198px] right-[137px] ">
                <img src={crewData.images.png} alt="" />
            </section>
        
        </section>
    )
}