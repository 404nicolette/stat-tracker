import React from 'react'
import Orb from '../components/animation/Orb'
import Nav from '../components/Nav'
import PerTournament from '../components/tournaments/PerTournament'
import { useNavigate } from "react-router-dom";

const TournamentPage = () => {
    const navigate = useNavigate();
    const toUAAP = ()=> navigate("/tournaments/uaap");
    const toSSL =()=> navigate("/tournaments/ssl")
    return (


        <div className=' w-full h-screen bg-[#e4e4e4] flex flex-col items-center justify-start'>

            <div className='w-full z-1'>
                <Nav/>
            </div>


            <div className='h-full w-full bg-[#e4e4e4] overflow-y-scroll'>
                <PerTournament tournamentNumber={"01"} hueNumber={61} tournamentName={"UAAP"} bgColour={"bg-[#291493]"} borderColour={"border-[#16027C]"} tournamentNavigate={toUAAP} />
                <PerTournament tournamentNumber={"02"} hueNumber={251} tournamentName={"SSL"} bgColour={"bg-[#6c0f0f]"} borderColour={"border-[#500303]"} tournamentNavigate={toSSL} />
            </div>


        </div>
    
    )
}
export default TournamentPage