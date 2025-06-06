import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toHome = () => navigate("/")
  const toTournaments = () => navigate("/tournaments");
  const toTeams = () => navigate("/teams");
  const toPlayers = () => navigate("/players");
  const toAlas = () => navigate("/alas");

  return (
    <nav className=" w-full h-24 bg-[#e4e4e4] border-b-2 shadow-md z-50">
      <div className="flex justify-between items-center h-full px-4">
        {/* Logo */}
        <h4 onClick={toHome} className="font-taruno text-xl cursor-pointer">ace//</h4>

        {/* large screen links */}
        <div className="hidden md:flex space-x-6 text-md p-8">
          <a onClick={toTournaments} className="text-gray-800 hover:text-red-600 font-kufi font-bold cursor-pointer">tournaments</a>
          <a onClick={toTeams} className="text-gray-800 hover:text-red-600 font-kufi font-bold cursor-pointer" >teams</a>
          <a onClick={toPlayers} className="text-gray-800 hover:text-red-600 font-kufi font-bold cursor-pointer" >players</a>
          <a onClick={toAlas} className="text-gray-800 hover:text-red-600 font-kufi font-bold cursor-pointer" >alas</a>
        </div>

        {/* Hamburger icon (small screens only) */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M1 3h14M1 8h14M1 13h14"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* dropdown for mobile */}
      {open && (
        <div className="md:hidden absolute top-30 left-0 w-full bg-[#e4e4e4] shadow-lg p-4 flex flex-col ">
          <a
            href="/tournaments"
            onClick={() => setOpen(false)}
            className="text-gray-800 hover:text-red-600 font-kufi py-4 "
          >
            tournaments
          </a>
          <a
            href="/teams"
            onClick={() => setOpen(false)}
            className="text-gray-800 hover:text-red-600 font-kufi py-4"
          >
            teams
          </a>
          <a
            href="/players"
            onClick={() => setOpen(false)}
            className="text-gray-800 hover:text-red-600 font-kufi py-4"
          >
            players
          </a>
          <a
            href="/alas"
            onClick={() => setOpen(false)}
            className="text-gray-800 hover:text-red-600 font-kufi py-4"
          >
            alas
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
