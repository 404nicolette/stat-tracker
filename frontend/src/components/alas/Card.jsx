import React from 'react'
import Text from '../text/Text'
import redirectImg from "../../assets/icons/redirect.svg"
function Card() {
  return (
    <div className='w-40 h-56 border-2 border-[#FF3131] rounded-2xl flex flex-col'>
        <div className='w-full h-[20%] flex items-center justify-between px-3 pt-2 '>
            <Text.Stretched className='text-sm text-[#FF3131]'>ALAS</Text.Stretched>

            <img
                className='h-[50%] cursor-pointer'
                src={redirectImg}
                alt="Redirect Logo"
            />
            
        </div>

        <div className='w-full h-[70%] flex flex-col items-center justify-center text-center'>
            <Text.Unbounded className=' text-[#FF3131] text-7xl'>12</Text.Unbounded>
            <Text.Unbounded className=' text-[#FF3131] text-md'>CANINO</Text.Unbounded>

        </div>

    </div>
  )
}

export default Card