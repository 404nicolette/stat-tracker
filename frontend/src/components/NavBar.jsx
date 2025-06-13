import { useState } from "react";
import { FaBars } from "react-icons/fa";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLinks = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full text-white">
     
      <div className="max-w-6xl mx-auto flex justify-between items-center border-b-2 border-red-700 w-[90%] p-4">
        <a href="/" className="text-lg font-unbounded cursor-pointer text-red-700">THE ACE.</a>

        {/*mobile only*/}
        <button
          onClick={toggleLinks}
          className="text-red-700 text-xl md:hidden"
        >
          <FaBars />
        </button>

        {/* desktop */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <a href="/tournaments" className="py-1 text-lg font-unbounded cursor-pointer text-red-700  hover:text-red-900">Tournaments</a>
          <a href="/teams" className="py-1 text-lg font-unbounded cursor-pointer text-red-700  hover:text-red-900">Teams</a>
          <a href="/players" className="py-1 text-lg font-unbounded cursor-pointer text-red-700  hover:text-red-900">Players</a>
          <a href="/alas" className="py-1 text-lg font-unbounded cursor-pointer text-red-700  hover:text-red-900">Alas</a>
        </div>
      </div>

      {/* mobile links */}
      {isOpen && (
        <div className="flex flex-col items-start gap-2 px-6 mt-2 md:hidden py-4">
          <a href="/tournaments" className="text-sm font-unbounded cursor-pointer text-red-900 hover:text-red-500">Tournaments</a>
          <a href="/teams" className="text-sm font-unbounded cursor-pointer text-red-900  hover:text-red-500">Teams</a>
          <a href="/players" className="text-sm font-unbounded cursor-pointer text-red-900  hover:text-red-500">Players</a>
          <a href="/alas" className="text-sm font-unbounded cursor-pointer text-red-900  hover:text-red-500">Alas</a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;