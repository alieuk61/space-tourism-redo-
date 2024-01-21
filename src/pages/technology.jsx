import * as data from 'src/data.json'
import {useState, useContext} from 'react'
import { PageContext } from 'src/context/contextProvider'
import Header from 'src/components/header';

export default function Technology(){

    const {techData, setTechData} = useContext(PageContext);
    
    const [spaceShuttle, setSpaceShuttle] = useState(data.technology[0])
    const numbers = [1, 2, 3];

    return(
        <section className="bg-[url('src/assets/technology/background-technology-desktop.jpg')] h-[896px] w-full">
            <Header/>
            <div className='flex uppercase font-barlow-cond text-[28px] gap-x-[28px] text-white absolute top-[212px] left-[167px] '><span className='opacity-[0.25]'>03</span><span>Space launch 101</span></div>
            <div className="numbers flex flex-col space-y-[32px] w-fit h-fit absolute top-[383px] left-[165px] ">
                {numbers.map((number, index) => {
                    return(
                        <button 
                        key={index}
                        onClick={() => setSpaceShuttle(data.technology[index])}
                        className="text-white w-[80px] h-[80px] opacity-[0.25] border border-white rounded-full font-belle text-[32px] tracking-[2-px]  "
                        >{number}</button>
                    )
                })}

            </div>
            <div className="technolody-desc w-[444px] h-[271px] text-white absolute top-[383px] left-[325px] ">
                <h5 className='text-[#D0D6F9] font-barlow-cond text-[16px] tracking-[2.7px] uppercase '>The technology</h5>
                <h2 className='font-belle text-[56px] uppercase '>{spaceShuttle.name}</h2>
                <p className='text-[#D0D6F9] font-barlow text-[18px] leading-[32px] '>{spaceShuttle.description}</p>
            </div>
            <section className="tech-img absolute right-0 top-[272px]">
                <img src={spaceShuttle.images.portrait} alt="space-shuttle" />
            </section>
        </section>
    )
}