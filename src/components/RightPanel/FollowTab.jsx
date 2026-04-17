import { BadgeCheck } from 'lucide-react'
import React from 'react'

const FollowTab = () => {
  return (
    <div className='w-full h-1/3 flex justify-between items-center hover:bg-white/5 transition duration-200 cursor-pointer rounded-sm'>
        <img src='https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRY_F_zrOYU79cTYldnGg3HU_R-oUjxio0TwHjXhcXYKw0LdSLdyo2jquqlE45t2Gln8VGZgRi5TPTU-hRrDQRP6srJ92C_Ib3wxsMxxBnnm_rRpxJMVEm0sa1mMCuCpOeeTOGXeg9y6x0&s=19' className='w-12 h-12 rounded-full'/>
        <div className='w-2/3 h-full flex flex-col justify-center ml-2'>
            <div className='flex font-bold items-center gap-1'>PMO India<BadgeCheck className='w-5'/></div>
            <div className='flex items-center text-[#71767b]'>@PMOIndia</div>
        </div>
        <div className='w-2/5 h-full flex justify-end items-center'>
            <button className='w-20 h-8 rounded-full font-bold text-sm bg-white text-black'>Follow</button>
        </div>
    </div>
  )
}

export default FollowTab