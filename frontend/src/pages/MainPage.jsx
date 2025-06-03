import React from 'react'
import VolleyballCourt from '../components/VolleyballCourt'
import Nav from '../components/Nav'

const MainPage = () => {
  return (
    <div className='border-2 border-red-700 w-full h-screen bg-[#e4e4e4] flex flex-col items-center justify-center'>
        <Nav/>       
        <VolleyballCourt/>
    </div>
  )
}
export default MainPage