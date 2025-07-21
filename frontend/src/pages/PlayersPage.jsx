import React from 'react'
import NavBar from '../components/NavBar'
import SearchBar from '../components/players/SearchBar'
import DropDown from "../components/players/DropDown"

function PlayersPage() {
  const teamName = ["LADY SPIKERS", "LADY BULLDOGS", "GOLDEN TIGRESSES", "LADY TAMARRAWS", "LADY FALCONS", "FIGHTING MAROONS", "BLUE EAGLES", "LADY RED WARRIORS", "ALAS"]
  const playerPosition = ["SETTER", "LIBERO", "MIDDLE BLOCKER", "OPPOSITE HITTER","OUTSIDE HITTER"]
  const alpha = Array.from(Array(26)).map((e,i) =>i + 65)
  const playerName = alpha.map((x)=> String.fromCharCode(x))
  return (
    <>
      <div className="  w-full  bg-[#e4e4e4] flex flex-col items-center justify-start overflow-hidden">
        <nav className="w-full z-1">
          <NavBar />
        </nav>

        <br/>
        <section className='w-full flex flex-col lg:flex-row lg:p-0 items-center justify-center '>
          <div className='pt-2 lg:pb-2 lg:pr-3 lg:w-[30%] w-[60%]'>
            <SearchBar/>
          </div>
          

          <div className='flex w-auto py-3 lg:py-0 overflow-x-scroll gap-x-1.5 px-2 lg:items-center lg:justify-center '>
            <DropDown
              label="ALL TEAMS"
              options={teamName}
              onChange={(e) => setSelectedPosition(e.target.value)}
            />

             <DropDown
              label="ALL POSITION"
              options={playerPosition}
              onChange={(e) => setSelectedPosition(e.target.value)}
            />

            <DropDown
              label="ALL PLAYERS"
              options={playerName}
              onChange={(e) => setSelectedPosition(e.target.value)}
            />
          </div>
        </section>
        <br/>

       <main className='h-auto w-[90%] md:w-auto lg:w-[70%]'>
        <div className='flex items-center jus w-full p-5 rounded-lg bg-[#bdb8b857] border-2 border-red-700 '>

          {/* PLAYER COLUMN */}
          <table className='font-stretch-expanded w-[50%] text-left lg:w-[70%] border-r-1 lg:border-r-0 '>
            <thead className='font-bold text-sm w-[20%]'>
              <tr>
                <th >PLAYER</th>
              </tr>
            </thead>
            <tbody className='text-[0.6rem] md:text-[0.7rem]'>
              <tr>
                <td className='py-2'>ANGEL CANINO</td>
              </tr>
            </tbody>
          </table>

          {/* TEAM + POSITION */}
          <div className='overflow-x-auto w-full'>
            <table className='font-stretch-expanded text-left lg:w-full  '>
              <thead className='font-bold text-sm w-[20%]'>
                <tr>
                  <th className='px-4'>TEAM</th>
                  <th className='pr-4'>POSITION</th>
                </tr>
              </thead>
              <tbody className='text-[0.6rem] md:text-[0.7rem] whitespace-nowrap'>
                <tr>
                  <td className='py-2 px-4'>
                    LADY SPIKERS + ALAS
                  </td>
                  <td className='py-2  pr-4'>
                    OUTSIDE HITTER + OPPOSITE HITTER
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
      </div>
    </>
  )
}

export default PlayersPage