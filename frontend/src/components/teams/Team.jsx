import React from 'react'

function Team({borderColour, schoolNameTop, schoolNameBottom}) {
  return (

    <div className={`border-4 rounded-full h-32 w-32 ${borderColour} flex flex-col items-center justify-center p-0 m-0`}>
        <h1  className=' text-md font-stretch-expanded '>{schoolNameTop}</h1>
        <h1  className=' text-md font-stretch-expanded '>{schoolNameBottom}</h1>
    </div>
  )
}

export default Team