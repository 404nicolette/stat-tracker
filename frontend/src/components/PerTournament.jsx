import React from 'react'
import Orb from './animation/Orb'
const PerTournament = ({tournamentNumber,tournamentName,hueNumber}) => {
  return (
     <div className='h-full w-full flex flex-col item-center  items-center justify-center'>
    

        <h1 className='border-b-2 border-[#2a2826]  h-[50%] w-full text-black text-[8rem]  flex justify-end items-end'>{tournamentNumber}</h1>

        <div className='border-b-2 border-[#2a2826] h-full w-full flex items-center justify-center flex-col'>

            <div className='relative w-[40vh] h-[40vh]'>
                <Orb
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={hueNumber}
                forceHoverState={false}

                className="w-[100%] h-[100%]"
                />

                <h3 className='absolute inset-0 flex items-center justify-center text-[2rem] text-black pointer-events-none'>{tournamentName}</h3>
            </div>
        </div>
        

    </div>
  )
}
export default PerTournament