import "../styles/LandingPageStyles.css"
import clubs from '../assets/clubs.svg'; 
import diamond from '../assets/diamond.svg'; 

import UAAPComp from "../components/CardComp"
import NavBar from "../components/NavBar"

const LandingPage = () => {
  return (
    
    <div>
        <div className="landing-page-main-container">

          <NavBar />
          
          {/* FIRST PAGE */}
          <div id="home" className="page first-page">
            <h2>for the data junkies</h2>
            <div className="court-main">   
              <h1>ace</h1>
              <div className="net"></div>
              <div className="backline-left"></div>
              <div className="backline-right"></div>
            </div>
          </div>




          {/* SECOND PAGE */}
          <div id="tournaments" className="page second-page">  
            
                   
            <div className="landing-page-left-container">

              <UAAPComp title="UAAP" logoSrc={clubs} authSrc={"https://iconscout.com/icons/club"} 
                authSrcName={"Clubs by "} linkSrc={"https://iconscout.com/contributors/phosphoricons"} 
                linkSrcName={"Philosopher Icon"}
                redirectTo={"/tournament/ssl"} />



              <UAAPComp title="SSL" logoSrc={diamond}  authSrc={"https://iconscout.com/icons/diamond"} 
              authSrcName={"Diamonds by "} linkSrc={"https://iconscout.com/contributors/phosphoricons"} 
              linkSrcName={"Philosopher Icon"}
              redirectTo={"/tournament/uaap"} />
            </div>
          </div>
         


            
        </div>
       

    </div>
  )
}

export default LandingPage