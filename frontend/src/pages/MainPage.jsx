import React from "react";
import VolleyballCourt from "../components/main/VolleyballCourt";
import Nav from "../components/Nav";
import Noise from "../components/animation/Noise"
import About from "../components/main/About";

const MainPage = () => {
  return (
    <div className=" w-full h-screen flex flex-col items-center justify-start">
      <Noise  className="h-auto w-full object-cover "/>
      <div className="w-full z-1">
        <Nav />
      </div>
      

      <div className="h-full w-full flex flex-col items-center justify-end p-4 ">
        <p className="font-stretch-extra-expanded font-bold text-[17rem]">THE ACE.</p>
        <div className="flex justify-end w-full">
          <h6 className="font-humanist text-3xl -mt-20  pr-17">VOLLEYBALL STATISTICS TRACKER</h6>
        </div>
      </div>

      <About/>

     
      

    </div>
  );
};
export default MainPage;
