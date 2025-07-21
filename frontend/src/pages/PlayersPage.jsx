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

        <main className='border-1 rounded-md h-auto w-[90%] lg:w-[80%]'>
          <table className='font-stretch-expanded'>
            <tr className='font-extrabold text-sm mb-2'>
              <td>PLAYER</td>
              <td>TEAM</td>
              <td>POSITION</td>
            </tr>

            <tbody className='text-md'>
              <td>ANGEL CANINO</td>
              <td>LADY SPIKERS/ ALAS</td>
               <td>OUTSIDE HITTER/ OPPOSITE HITTER</td>
            </tbody>
          </table>
         

        </main>
      </div>
    </>
  )
}

export default PlayersPage