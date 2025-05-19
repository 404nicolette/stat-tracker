import React from 'react'
import NavBar from '../components/NavBar'
import AllTeams from '../components/AllTeams'
import archer from "../assets/archer.svg"
import dog from "../assets/dog.svg"
import tiger from "../assets/tiger.svg"
import bull from "../assets/bull.svg"
import fist from "../assets/fist.svg"
import falcon from "../assets/falcon.svg"
import eagle from "../assets/eagle.svg"
import warriors from "../assets/warriors.svg"



import "../styles/AllTeamsPageStyles.css"



const AllTeamsPages = () => {
  return (
    <div>
      
        <div className='all-teams-main-container'>

            
            <NavBar />

            <div className='all-teams-outer-container'>
                <h1>teams</h1>
            </div>

            <div className='all-teams-inner-container' >

              {/* NU */}
               <AllTeams schoolName={"National University"} teamName={"Lady Bulldogs"} teamLogo={dog}
                  authTeamSrc={"https://iconscout.com/free-icon/dog-8377633_6770162"}  authTeamSrcName={"Dog Paw by "}  
                  linkTeamSrc={"https://iconscout.com/contributors/graphic-room"} linkSrcTeamName={"Venus"}
                  borderStyle={"all-team-border-nu"} teamColor="0, 15, 128" />
             
              {/* DLSU */}
              <AllTeams schoolName={"De La Salle University"} teamName={"Lady Spikers"} teamLogo={archer}
                  authTeamSrc={"https://iconscout.com/icons/bow-and-arrow"}  authTeamSrcName={"Bow And Arrow by "}  
                  linkTeamSrc={"https://iconscout.com/contributors/nix-art"} linkSrcTeamName={"Nix Art"}
                  borderStyle={"all-team-border-dlsu"} bgColour={"all-team-bg-dlsu"} teamColor="0, 128, 0"  />

              {/* UST */}
              <AllTeams schoolName={"University of Santo Tomas"} teamName={"Lady Tigresses"} teamLogo={tiger}
                  authTeamSrc={"https://iconscout.com/icons/tiger"}  authTeamSrcName={"Tiger by "}  
                  linkTeamSrc={"https://iconscout.com/contributors/gold-finch-studio"} linkSrcTeamName={"Gold-Finch-Studio"}
                  borderStyle={"all-team-border-ust"} bgColour={"all-team-bg-ust"} teamColor="214, 198, 26"/>

              {/* FEU */}
              <AllTeams schoolName={"Far Eastern University"} teamName={"Lady Tamaraws"} teamLogo={bull}
                  authTeamSrc={"https://iconscout.com/icons/bull"}  authTeamSrcName={"Bull by "}  
                  linkTeamSrc={"https://iconscout.com/contributors/ideen-fabrik"} linkSrcTeamName={"Ideenfabrik"}
                  borderStyle={"all-team-border-feu"} bgColour={"all-team-bg-feu"} teamColor="119, 188, 95"/>


              {/* UP */}
              <AllTeams schoolName={"University of The Philippines"} teamName={"Fighting Maroons"} teamLogo={fist}
                  authTeamSrc={"https://iconscout.com/icons/fist"}  authTeamSrcName={"Fist by "}  
                  linkTeamSrc={"https://iconscout.com/contributors/graficon"} linkSrcTeamName={"graficon"}
                  borderStyle={"all-team-border-up"} bgColour={"all-team-bg-up"} teamColor="119, 10, 10"/>


              {/* ADU */}
              <AllTeams schoolName={"Adamson University"} teamName={"Lady Falcons"} teamLogo={falcon}
                  authTeamSrc={"https://iconscout.com/icons/eagle-tattoo"}  authTeamSrcName={"Eagle Tattoo by "}  
                  linkTeamSrc={"https://iconscout.com/contributors/pro-symbols"} linkSrcTeamName={"Prosymbols"}
                  borderStyle={"all-team-border-adu"} bgColour={"all-team-bg-adu"} teamColor="108, 178, 213"/>


              {/* Ateneo */}
              <AllTeams schoolName={"Ateneo de Manila University"} teamName={"Blue Eagles"} teamLogo={eagle}
                  authTeamSrc={"hhttps://iconscout.com/free-icon/american-eagle-3421382_2853767"}  authTeamSrcName={"Eagle by "}  
                  linkTeamSrc={"https://iconscout.com/contributors/icon-54"} linkSrcTeamName={"Icon 54"}
                  borderStyle={"all-team-border-admu"} bgColour={"all-team-bg-admu"} teamColor="30, 68, 129"/>

              {/* UE */}
              <AllTeams schoolName={"University of The East"} teamName={"Ladt Red Warriors"} teamLogo={warriors}
                  authTeamSrc={"https://iconscout.com/icons/sword"}  authTeamSrcName={"Sword by "}  
                  linkTeamSrc={"https://iconscout.com/contributors/AmruID"} linkSrcTeamName={"Amru Id"}
                  borderStyle={"all-team-border-ue"} bgColour={"all-team-bg-ue"} teamColor="206, 37, 37"/>





            </div>
        </div>
    </div>
  )
}
export default AllTeamsPages

