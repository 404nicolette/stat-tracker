import React from 'react'
import AlasCard from '../components/alas/AlasCard';
import NavBar from '../components/NavBar';
function AlasPage() {
  return (
    <>
      <div className=" w-full  bg-[#e4e4e4] flex flex-col items-center justify-start ">
        <nav className="w-full z-1">
          <NavBar />
        </nav>

        <main className="flex flex-col items-center justify-center  ">
          <AlasCard/>

          

        </main>
        
      </div>
    </>
  );
}

export default AlasPage