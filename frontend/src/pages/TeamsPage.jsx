import React from "react";
import Team from "../components/teams/Team";
import NavBar from "../components/NavBar";

const TeamsPage = () => {
  return (
    <>
      <div className=" w-full  bg-[#e4e4e4] flex flex-col items-center justify-start ">
        <div className="w-full z-1">
          <NavBar />
        </div>
        
        <div className="border-2 border-amber-600 w-screen h-screen place-items-center grid grid-cols-2 -gap-2 overflow-y-scroll">
          <Team borderColour={"border-[#157520]"} schoolNameTop={"LADY"} schoolNameBottom={"SPIKERS"} />
          <Team borderColour={"border-[#157520]"} schoolNameTop={"LADY"} schoolNameBottom={"SPIKERS"} />
          <Team borderColour={"border-[#157520]"} schoolNameTop={"LADY"} schoolNameBottom={"SPIKERS"} />
          <Team borderColour={"border-[#157520]"} schoolNameTop={"LADY"} schoolNameBottom={"SPIKERS"} />
          <Team borderColour={"border-[#157520]"} schoolNameTop={"LADY"} schoolNameBottom={"SPIKERS"} />
          <Team borderColour={"border-[#157520]"} schoolNameTop={"LADY"} schoolNameBottom={"SPIKERS"} />
          <Team borderColour={"border-[#157520]"} schoolNameTop={"LADY"} schoolNameBottom={"SPIKERS"} />
          <Team borderColour={"border-[#157520]"} schoolNameTop={"LADY"} schoolNameBottom={"SPIKERS"} />
        </div>
      </div>
    </>
  );
};
export default TeamsPage;
