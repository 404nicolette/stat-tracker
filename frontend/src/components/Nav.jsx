import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toHome = () => navigate("/");
  const toTournaments = () => navigate("/tournaments");
  const toTeams = () => navigate("/teams");
  const toPlayers = () => navigate("/players");
  const toAlas = () => navigate("/alas");

  return (
    <div className="flex flex-col items-center justify-start">
      <div className=" flex items-center justify-between border-b-2 border-red-700 w-[90%] p-8">

      <div>
        <a onClick={toHome} className=" text-red-700 font-unbounded cursor-pointer lg:text-2xl lg:justify-end ">THE ACE.{" "}</a>
      </div>
        
      <div>
        <a onClick={toTournaments} className=" text-red-700 font-unbounded cursor-pointer lg:mx-2 lg:text-2xl">TOURNAMENTS{" "}</a>
        <a onClick={toTeams} className=" text-red-700 font-unbounded cursor-pointer lg:mx-2 lg:text-2xl">TEAMS{" "}</a>
        <a onClick={toPlayers} className=" text-red-700 font-unbounded cursor-pointer lg:mx-2 lg:text-2xl">PLAYERS{" "}</a>
        <a onClick={toAlas} className=" text-red-700 font-unbounded cursor-pointer lg:mx-2 lg:text-2xl">ALAS{" "}</a>
      </div>

    </div>
    
   

      {/* large screen links */}
      {/* <div className="hidden lg:flex space-x-6 text-md p-8 border-b-2 w-[90%] z-50 border-red-700">
        <a onClick={toHome} className=" text-red-700 font-unbounded cursor-pointer lg:text-xl lg:justify-end ">ACE{" "}</a>

        <div className="flex space-x-6">
          <a onClick={toTournaments} className=" text-red-700 font-unbounded cursor-pointer lg:text-xl">TOURNAMENTS{" "}</a>
          <a onClick={toTeams} className=" text-red-700 font-unbounded cursor-pointer lg:text-xl">TEAMS{" "}</a>
          <a onClick={toPlayers} className=" text-red-700 font-unbounded cursor-pointer lg:text-xl">PLAYERS{" "}</a>
          <a onClick={toAlas} className=" text-red-700 font-unbounded cursor-pointer lg:text-xl">ALAS{" "}</a>
        </div>

      </div> */}
    </div>

  );
};

export default Nav;
