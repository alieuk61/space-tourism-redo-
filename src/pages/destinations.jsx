import * as data from 'src/data.json'
import { useState, useContext } from 'react'
import {PageContext} from 'src/context/contextProvider'
import Header from 'src/components/header'

export default function Destinations() {

    const { pageData, setPageData } = useContext(PageContext)
    setPageData(data.destinations)
    const pageInfo = pageData;

    return (
        <section className="bg-[url('src/assets/destination/background-destination-desktop.jpg')] h-screen w-full">
            <Header />
            <div className='flex uppercase font-barlow-cond text-[28px] gap-x-[28px] text-white'><span className='opacity-[0.25]'>01</span><span>Pick your destination</span></div>

            {/* make 2 grid temp col, one for the planet images and the other for the desc */}

            <div className='grid grid-cols-2 w-[890px] h-[472px]'>
                <section><img src={pageInfo ? pageInfo[0].images.png : ''} alt="Moon-img" /></section>
                <section>
                    <div className='w-[285.5px] h-[34px] flex justify-between'>
                        <button className='uppercase'>Moon</button>
                        <button className='uppercase'>Mars</button>
                        <button className='uppercase'>Europa</button>
                        <button className='uppercase'>Titan</button>
                    </div>
                    <div>
                        {/* planet name */}
                    </div>
                    <div>
                        {/* planet desc */}
                    </div>

                    <hr className='w-[444px] h-[1px] bg-[#383B4B]'/>

                    <section className='grid grid-cols-2'>
                        <div className='w-[143px] h-[61px] '>
                            {/* distance */}
                        </div>
                        <div className='w-[143px] h-[61px] '>
                            {/* travel time */}
                        </div>
                    </section>
                </section>
            </div>
        </section>
    )
}//THEME IS UNDEFINED RN, FIX IT WHEN YOU SEE THIS, ISSUE IS PROBABLY IN THE CONTEXT FILE