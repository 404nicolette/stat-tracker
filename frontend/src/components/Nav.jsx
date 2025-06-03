import React, { useState } from 'react';

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-14 bg-[#e4e4e4] border-b-2 shadow-md z-50">
      <div className="flex justify-between items-center h-full px-4">
        {/* Logo */}
        <h4 className="font-taruno text-xl">ace//</h4>

        {/* large screen links */}
        <div className="hidden md:flex space-x-6 text-md">
          <a href="#" className="text-gray-800 hover:text-red-800 font-kufi font-bold">Tournaments</a>
          <a href="#" className="text-gray-800 hover:text-red-800 font-kufi font-bold">Teams</a>
          <a href="#" className="text-gray-800 hover:text-red-800 font-kufi font-bold ">Players</a>
          <a href="#" className="text-gray-800 hover:text-red-800 font-kufi font-bold">National Team</a>
        </div>

        {/* Hamburger icon (small screens only) */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
              <path d="M1 3h14M1 8h14M1 13h14" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* dropdown for mobile */}
      {open && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-[#e4e4e4] shadow-lg p-4 flex flex-col ">
          <a href="#" onClick={() => setOpen(false)} className="text-gray-800 hover:text-amber-500 font-kufi p-4">Tournaments</a>
          <a href="#" onClick={() => setOpen(false)} className="text-gray-800 hover:text-amber-500 font-kufi p-4">Teams</a>
          <a href="#" onClick={() => setOpen(false)} className="text-gray-800 hover:text-amber-500 font-kufi p-4">Players</a>
          <a href="#" onClick={() => setOpen(false)} className="text-gray-800 hover:text-amber-500 font-kufi p-4">Alas</a>
        </div>
      )}
    </nav>
  );
};

export default Nav;