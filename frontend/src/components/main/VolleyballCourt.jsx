import React from "react";

const VolleyballCourt = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <div className="border-4 h-98 w-56 absolute flex flex-col justify-between lg:w-[80vh] lg:h-68 lg:flex-row bg-[#e4e4e4]">
          {/* Left Text */}
          <div className="flex justify-center items-center h-[3rem] w-full lg:h-full lg:w-[3rem]">
            <h1 className="font-taruno text-[3rem] text-center lg:-rotate-90">
              ace
            </h1>
          </div>

          {/* Right Text */}
          <div className="flex justify-center items-center h-[3rem] w-full lg:h-full lg:w-[3rem]   ">
            <h1 className="font-taruno text-[3rem] text-center rotate-180 lg:rotate-90">
              ace
            </h1>
          </div>
        </div>
        <div className="border-x-2 h-[65vh] border-dotted w-56  absolute lg:w-[30vh] lg:h-96"></div>{" "}
        {/* lines inside the court */}
        <div className="border-y-2 h-[1vh] w-56 absolute lg:border-x-2 lg:h-68 lg:w-[2vh]"></div>
        <div className="border-y-2 h-[25vh] w-60 border-dotted absolute  lg:h-68 lg:w-[98vh]"></div>
        {/* middle line */}
      </div>
    </>
  );
};
export default VolleyballCourt;
