import React from "react";
import NavBar from "../components/NavBar";
import Noise from "../components/animation/Noise"
import PageTitle from "../components/main/PageTitle";
import Particles from "../components/animation/Particles";
import About from "../components/main/about";
import Footer from "../components/main/Footer";

const MainPage = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-start ">
      <Noise className="h-auto w-full object-cover" />

      <div className="w-full z-20">
        <NavBar />
      </div>


      <div className="z-10 h-screen w-screen absolute overflow-y-scroll overflow-x-hidden">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 ">
          <PageTitle />
        </div>

         <div >
          <About />
        </div>
      </div>

     
      <Footer/>
     
      

    </div>
  );
};
export default MainPage;
