import React from 'react'
import spadeImg from "../../assets/icons/spade.svg"
function AlasCard() {
  return (
    <div className='h-screen w-screen my-3.5'>

        <div className=' h-[90%] rounded-2xl flex flex-col font-stretch-expanded p-3 absolute'>

            <div className='h-[10%] flex flex-col items-start relative' >
               
                <img
                    className='h-[70%] object-contain'
                    src={spadeImg}
                    alt="Spade Icon"
                />
                <h5>ALAS</h5>
               
            </div>

            <div className='h-full flex items-center justify-center relative'>
                <img
                    className='h-[60%]'
                    src={spadeImg}
                    alt="Spade Icon"
                />
            </div>

            <div className='h-[10%] flex flex-col place-items-end px-2 relative'>
                <img
                    className='h-[70%] rotate-180'
                    src={spadeImg}
                    alt="Spade Icon"
                />
                <h5>ALAS</h5>
            </div>
        </div>

    </div>
  )
}

export default AlasCard