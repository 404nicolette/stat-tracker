import React from 'react'
import NavBar from '../components/NavBar';
import CardMarquee from '../components/alas/CardMarquee';
import Text from '../components/text/Text';
function AlasPage() {
  return (
    <>
      <div className=" w-full  bg-[#e4e4e4] flex flex-col items-center justify-start overflow-y-hidden">
        <nav className="w-full z-1">
          <NavBar />
        </nav>

        <main className="h-screen w-full flex flex-col items-center justify-start p-2 bg-[#e4e4e4]">
         
          <div className='h-[65%] lg:h-[55%] w-full  bg-[#092947] flex items-end p-5 mb-10'>
            <Text.Unbounded className='text-5xl text-[#FFF100]'>ALAS PILIPINAS</Text.Unbounded>
          </div>

          <div className='w-screen h-auto'>
            <CardMarquee/>
          </div>
        </main>
        
      </div>
    </>
  );
}

export default AlasPage