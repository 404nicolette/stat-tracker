import React from 'react'

function PerSurname({startingLetter}) {
  return (
    <div className="w-[90%]">
        <div className="flex p-8  ">
            <span className="font-humanist text-3xl hover:scale-110 cursor-pointer transition-transform">"{startingLetter}"</span>
            
        </div>
    </div>
  )
}

export default PerSurname