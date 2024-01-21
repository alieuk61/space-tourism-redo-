import { NavLink } from 'react-router-dom'

export default function Header(){

    const pages = ['home', 'destinations', 'crew', 'technology']

    return(
        <header className='flex justify-between relative ml-[55px] pt-[20px] '>
            <img src='src/assets/shared/logo.svg' className='w-[48px] h-[48px] grid self-center ' alt="" />

            <div className='w-[473px] h-[1px] opacity-[0.2515] bg-white absolute left-[112px] top-[68px] max-md:hidden' />
        
            <div className='w-[830px] h-[96px] backdrop-blur-md bg-[#ffffff0a] px-[50px] box-border text-white flex justify-evenly items-center pb-[5px] font-barlow-cond right-[50px]
            max-md:w-[450px]  '>
                {pages.map((page, index) => {
                    return(
                        <NavLink
                            to={page === 'home' ? '/' : `/${page}`}
                            key={index}
                            className={({ isActive, isPending }) =>{
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        }
                        >
                    <button className='flex gap-x-[14px] pr-[4px] text-[16px] tracking-[2.7px] uppercase clwe' key={index}><span>0{index}</span><span>{page}</span></button>
                        </NavLink>
                )})}
        </div>
        </header>
    )
}