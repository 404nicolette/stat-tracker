import React from 'react'
import Orb from '../components/animation/Orb'
import Nav from '../components/Nav'
import PerTournament from '../components/PerTournament'

const TournamentPage = () => {
  return (


    <div className=' w-full h-screen bg-[#e4e4e4] flex flex-col items-center justify-start'>

        <div className='w-full z-1'>
            <Nav/>
        </div>


        <div className='h-full w-full bg-[#e4e4e4] border-4 border-red-600 overflow-y-scroll'>
            <PerTournament tournamentNumber={"01"} hueNumber={61} tournamentName={"UAAP"} />
            <PerTournament tournamentNumber={"02"} hueNumber={11} tournamentName={"SSL"} />



            {/* <div className='h-full w-full flex flex-col item-center  items-center justify-center'>


                <h1 className='border-b-2 border-[#2a2826]  h-[50%] w-full text-black text-[8rem]  flex justify-end items-end'>01</h1>

                <div className='border-b-2 border-[#2a2826] h-full w-full flex items-center justify-center flex-col'>

                    <div className='relative w-[40vh] h-[40vh]'>
                        <Orb
                        hoverIntensity={0.7}
                        rotateOnHover={true}
                        hue={45}
                        forceHoverState={false}

                        className="w-[100%] h-[100%]"
                        />

                        <h3 className='absolute inset-0 flex items-center justify-center text-[2rem] font-bold text-black pointer-events-none'>UAAP</h3>
                    </div>
                </div>
                

            </div> */}
        
        

        </div>


    </div>
   
  )
}
export default TournamentPage