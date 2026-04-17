import React from 'react'
import {Search} from 'lucide-react'

const Searchbar = () => {

  return (
    <div className='w-87 h-11.5 rounded-full border-1 border-[#2f3336] mb-4 flex gap-2 focus-within:border-blue-50'>
        <Search className='mt-3 ml-2.5 text-[#71767b] w-5 h-5'/>
        <input className="w-full outline-none" placeholder='Search'/>
    </div>
  )
}

export default Searchbar