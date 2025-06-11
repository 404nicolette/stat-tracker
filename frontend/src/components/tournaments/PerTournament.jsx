import React from "react";
import Orb from "../animation/Orb";
import Noise from "../animation/Noise";

const PerTournament = ({
  tournamentNumber,
  tournamentName,
  hueNumber,
  bgColour,
  borderColour,
  tournamentNavigate,
}) => {
  return (
    <div className="relative">
      <Noise className="h-full w-full object-cover " />
        <div className="sticky top-0 flex h-screen items-center justify-center ">
          <div className="absolute left-0 right-0 h-[50vh] w-full px-8 flex flex-col items-end justify-end lg:px-14">
            <h2 className="text-[10rem] font-bold lg:text-[15rem] ">
              {tournamentNumber}
            </h2>
          </div>
        </div>

        <div
          className={`sticky top-[px] flex h-[calc(100vh-96px)] items-center ${bgColour} ${borderColour} border-4  justify-center `}
        >
          {/* bg */}

          <div className="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-center justify-center">
            <div
              className="h-75 w-75 flex item-center justify-center flex-col cursor-pointer md:h-85 md:w-85 lg:w-96 lg:h-96"
              onClick={tournamentNavigate}
            >
              <Orb hoverIntensity={0.8} hue={hueNumber} />
            </div>
            <h3 className="absolute inset-0 flex items-center justify-center text-[2rem]  text-white pointer-events-none">
              {tournamentName}
            </h3>
          </div>
        </div>
    </div>
  );
};
export default PerTournament;
