import React from 'react'
import NavBar from '../components/NavBar'
import PerSurname from '../components/players/PerSurname'

function PlayersPage() {
  return (
    <>
      <div className="  w-full  bg-[#e4e4e4] flex flex-col items-center justify-start overflow-hidden">
        <div className="w-full z-1">
          <NavBar />
        </div>

        <div className="flex w-full h-full justify-center items-center md:flex-row">
          <div className='h-[calc(100vh-60px)] w-full flex flex-col md:flex-row  '>

            <div className='bg-[#600606] h-[50%] w-[100%] rounded-b-[2rem] md:rounded-b-none md:rounded-tr-[5rem] md:rounded-br-[5rem] box-shadow md:w-[50%] md:h-[100%]'>
              <div className='flex flex-col justify-end items-start h-full p-8'>
                <h1 className=' text-[#e4e4e4] font-vibrant text-[3rem] md:text-[5rem]'>PLAYERS</h1>
              </div>
            </div>

            <div className='grid grid-cols-4 gap-2 place-items-center sm:grid-cols-4 h-[50%] overflow-y-scroll md:w-[50%] md:h-[100%] md:p-10'>
              <PerSurname startingLetter={"a"}/>
              <PerSurname startingLetter={"b"}/>
              <PerSurname startingLetter={"c"}/>
              <PerSurname startingLetter={"d"}/>
              <PerSurname startingLetter={"e"}/>
              <PerSurname startingLetter={"f"}/>              
              <PerSurname startingLetter={"g"}/>
              <PerSurname startingLetter={"h"}/>
              <PerSurname startingLetter={"i"}/>
              <PerSurname startingLetter={"j"}/>
              <PerSurname startingLetter={"k"}/>
              <PerSurname startingLetter={"l"}/>
              <PerSurname startingLetter={"m"}/>
              <PerSurname startingLetter={"n"}/>              
              <PerSurname startingLetter={"o"}/>
              <PerSurname startingLetter={"p"}/>
              <PerSurname startingLetter={"q"}/>
              <PerSurname startingLetter={"r"}/>
              <PerSurname startingLetter={"s"}/>
              <PerSurname startingLetter={"t"}/>
              <PerSurname startingLetter={"u"}/>
              <PerSurname startingLetter={"v"}/>              
              <PerSurname startingLetter={"w"}/>
              <PerSurname startingLetter={"x"}/>
              <PerSurname startingLetter={"y"}/>
              <PerSurname startingLetter={"z"}/>

            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default PlayersPage