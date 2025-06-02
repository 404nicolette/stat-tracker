import React from 'react'

const VolleyballCourt = () => {
  return (
    <>

        <div className='flex flex-col items-center justify-center'>

            <div className='border-4 h-98 w-56 absolute flex flex-col justify-between' >
                <h1 className='font-taruno text-[3rem] text-center'>ace</h1>
                <h1 className='font-taruno text-[3rem] text-center rotate-180'>ace</h1>
            </div>  
            <div className='border-x-2 h-[70vh] border-dotted w-56  absolute'></div> {/* lines inside the court */}
            <div className='border-y-2 h-[1vh] w-64 absolute'></div> 
            <div className='border-y-2 h-[25vh] w-64 border-dotted absolute'></div>{/* middle line */}
       
        </div>
    </>
   
  )
}
export default VolleyballCourt