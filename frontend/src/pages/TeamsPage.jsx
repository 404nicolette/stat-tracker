import React from "react";
import TeamCard from "../components/teams/TeamCard";

import NavBar from "../components/NavBar";

const TeamsPage = () => {
  return (
    <>
      <div className=" w-full  bg-[#e4e4e4] flex flex-col items-center justify-start ">
        <div className="w-full z-1">
          <NavBar />
        </div>

        <div className="h-[calc(100vh-96px)]  w-full overflow-y-scroll overflow-x-hidden items-center justify-start flex flex-col ">
          <h1 className="text-5xl border-b-2 w-screen p-12">TEAMS</h1>

          <div className="border-2 border-amber-600 w-screen h-screen grid grid-flow-row grid-rows-4 gap-2 overflow-y-scroll">
            <TeamCard />
          </div>
        </div>
      </div>
    </>
  );
};
export default TeamsPage;
