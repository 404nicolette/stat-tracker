import React from 'react'
import VolleyballCourt from '../components/VolleyballCourt'
import Nav from '../components/Nav'

const MainPage = () => {
  return (

    <div className=' w-full h-screen bg-[#e4e4e4] flex flex-col items-center justify-start'>

      <div className='w-full z-1'>
        <Nav/>
      </div>

      <div className='h-full w-full flex flex-col items-center justify-center p-4'>

        <div className=' p-8 h-[90%] w-[93%] flex flex-col items-center justify-center'>
          <VolleyballCourt/>
        </div>
       
      </div>
      

     


       
    </div>
  )
}
export default MainPage