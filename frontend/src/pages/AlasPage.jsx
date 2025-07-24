import React from 'react'
import NavBar from '../components/NavBar';
import spadeImg from "../assets/icons/spade.svg"
function AlasPage() {
  return (
    <>
      <div className=" w-full  bg-[#e4e4e4] flex flex-col items-center justify-start ">
        <nav className="w-full z-1">
          <NavBar />
        </nav>

        <main className="flex flex-col items-center justify-center  border-3 h-screen w-full">

          <div className='h-[30%] md:h-[40%]'>
            <img
              className='h-full'
              src={spadeImg}
              alst="Spade Icon"/>
          </div>

          <div className=' text-center'>
            <h1 className='font-unbounded font-bold  text-[2rem] md:text-[3rem]'>ALAS</h1>
            
          </div>
          

          

        </main>
        
      </div>
    </>
  );
}

export default AlasPage