
import Noise from "../components/animation/Noise"
import React from "react";
import Orb from "../components/animation/Orb";
import NavBar from "../components/NavBar";
import PerTournament from "../components/tournaments/PerTournament";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const toUAAP = () => navigate("/tournaments/uaap");
  const toSSL = () => navigate("/tournaments/ssl");

  return (
    <div className=" w-full h-screen flex flex-col items-center justify-start">
      <Noise  className="h-auto w-full object-cover "/>
      <div className="w-full z-1">
        <NavBar />
      </div>
      

     <div className="h-full w-full overflow-y-scroll">
        <PerTournament
          tournamentNumber={"01"}
          hueNumber={61}
          tournamentName={"UAAP"}
          bgColour={"bg-[#291493]"}
          borderColour={"border-[#16027C]"}
          tournamentNavigate={toUAAP}
        />
        <PerTournament
          tournamentNumber={"02"}
          hueNumber={251}
          tournamentName={"SSL"}
          bgColour={"bg-[#6c0f0f]"}
          borderColour={"border-[#500303]"}
          tournamentNavigate={toSSL}
        />
      </div>
     
      

    </div>
  );
};
export default MainPage;
