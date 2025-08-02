import React from 'react'
import NavBar from '../components/NavBar';
import Card from '../components/alas/Card';
import Text from '../components/text/Text';
function AlasPage() {
  return (
    <>
      <div className=" w-full  bg-[#e4e4e4] flex flex-col items-center justify-start ">
        <nav className="w-full z-1">
          <NavBar />
        </nav>

        <main className="h-screen w-full flex flex-col items-center justify-start p-5 bg-[#e4e4e4]">
         
          <div className='h-[65%] lg:h-[55%] w-full  bg-[#092947] flex items-end p-5'>
            <Text.Unbounded className='text-5xl text-[#FFF100]'>ALAS PILIPINAS</Text.Unbounded>
          </div>
          <div className='border-3 w-full'>
            
          </div>

          
          

          

        </main>
        
      </div>
    </>
  );
}

export default AlasPage