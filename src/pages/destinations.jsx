import * as data from 'src/data.json'
import { useState, useContext } from 'react'
import {PageContext} from 'src/context/contextProvider'
import Header from 'src/components/header'

export default function Destinations() {

    const { destinationsData, setDestinationsData } = useContext(PageContext);
    const [planetInfo, setPlanetInfo] = useState(destinationsData)
    const planets = ['Moon', 'Mars', 'Europa', 'Titan']

    return (
        <section className="bg-[url('src/assets/destination/background-destination-desktop.jpg')] h-[896px] w-full">
            <Header />
            <div className='flex uppercase font-barlow-cond text-[28px] gap-x-[28px] text-white absolute top-[212px] left-[167px] tracking-[4.725px] uppercase '><span className='opacity-[0.25]'>01</span><span>Pick your destination</span></div>

            {/* make 2 grid temp col, one for the planet images and the other for the desc */}

            <div className='grid grid-cols-2 w-[890px] h-[472px] space-x-[157px] absolute top-[333px] left-[171px] '>
                <section><img src={planetInfo ? planetInfo.images.png : ''} alt="Moon-img" /></section>
                <section className='text-white'>
                    <div className='w-[285.5px] h-[34px] flex justify-between'>
                        {planets.map((planet, key) => {
                            return(
                                <button 
                                key={key}
                                onClick={() => {
                                    setPlanetInfo(data.destinations[key])
                                }}
                                className='uppercase font-barlow-cond text-[16px] tracking-[2.7px]'>{planet}</button>
                            )
                        })}
                    </div>
                    <div className='font-belle uppercase text-[100px] mb-[14px] mt-[37px] '>
                        {planetInfo.name}
                    </div>
                    <div className='text-[#D0D6F9] font-barlow text-[18px] leading-[32px] w-[444px] h-[128px] mt-[14px] mb-[54px] '>
                        {planetInfo.description}
                    </div>

                    <hr className='w-[444px] h-[1px] bg-[#383B4B] mb-[28px] '/>

                    <section className='grid grid-cols-2 uppercase gap-x-[79px]'>
                        <div className='w-[143px] h-[61px] '>
                            <h5 className='font-barlow-cond text-[#D0D6F9] text-[14px] tracking-[2.362px] ' >AVG. DISTANCE</h5>
                            <h3 className='font-belle text-[25px] text-white' >{planetInfo.distance}</h3>
                        </div>
                        <div className='w-[143px] h-[61px] '>
                            <h5 className='font-barlow-cond text-[#D0D6F9] text-[14px] tracking-[2.362px]'>Est. travel time</h5>
                            <h3 className='font-belle text-[25px] text-white '>{planetInfo.travel}</h3>
                        </div>
                    </section>
                </section>
            </div>
        </section>
    )
}
