import { NavLink } from 'react-router-dom'
import Destinations from '../pages/destinations'
export default function ExploreButton() {

    return (
        <NavLink to='/destinations'>
            <button className="w-[274px] h-[274px] rounded-[274px] bg-white absolute right-[155px] top-[495px] max-md:top-[692px] max-md:left-[263px] ">
                <h3 className='text-[#0B0D17] font-belle text-[32px] tracking-[2px]'>EXPLORE</h3>
            </button>
        </NavLink>
    )
}