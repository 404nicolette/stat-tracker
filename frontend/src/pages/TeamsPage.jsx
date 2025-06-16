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

        <div className="flex flex-col items-center justify-center  ">

          <h1 className="font-stretch-expanded text-4xl font-semibold mt-8">[ TEAMS ]</h1>
          <div className="grid grid-cols-2 gap-8 p-10 overflow-y-scroll sm:grid-cols-4 ">
            <Team schoolName={"LADY SPIKERS"}  />
            <Team schoolName={"LADY BULLDOGS"}  />
            <Team schoolName={"GOLDEN TIGRESSES"}  />
            <Team schoolName={"LADY TAMARRAWS"}  />
            <Team schoolName={"LADY FALCONS"}  />
            <Team schoolName={"FIGHTING MAROONS"}  />
            <Team schoolName={"BLUE EAGLES"}  />
            <Team schoolName={"LADY RED WARRIORS"}  />
          </div>
        </div>
        
      </div>
    </>
  );
};
export default TeamsPage;
