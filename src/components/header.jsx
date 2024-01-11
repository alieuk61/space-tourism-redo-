import { NavLink } from 'react-router-dom'
import { Logo } from 'src/assets'

export default function Header(){

    const pages = ['home', 'destinations', 'crew', 'technology']

    return(
        <header className='flex'>
            {/* <Logo /> */}

            <div className='w-[473px] h-[1px] opacity-[0.2515] bg-white' />
        
            <div className='w-[830px] h-[96px] backdrop-blur-md bg-[#ffffff0a] box-border text-white flex justify-evenly items-center pb-[5px] font-barlow-cond right-[50px]'>
                {pages.map((page, index) => {
                    return(
                        <NavLink
                            to={page === 'home' ? '/' : `${page}`}
                            className={({ isActive, isPending }) =>{
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        }
                        >
                    <button className='flex gap-x-[14px] pr-[4px] text-[16px] tracking-[2.7px] uppercase' key={index}><span>0{index}</span><span>{page}</span></button>
                        </NavLink>
                )})}
        </div>
        </header>
    )
}