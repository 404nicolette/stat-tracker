import React from 'react';
import Cross from './Cross';
import TiltedCard from '../animation/TiltWrapper';

function Team({ schoolName }) {
  return (
    <TiltedCard> 
      <div className="border-2 border-red-700 rounded-[1rem] h-44 w-32 md:h-60 md:w-40 flex flex-col items-center justify-center p-2 overflow-hidden shadow-md bg-white/10 backdrop-blur-sm">
        <h1 className="text-center font-stretch-expanded text-xs font-semibold md:text-md my-2">
          {schoolName}
        </h1>
        <div className="cursor-pointer hover:animate-spin">
          <Cross />
        </div>
      </div>
    </TiltedCard>
  );
}

export default Team;