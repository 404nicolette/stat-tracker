import { useNavigate } from 'react-router-dom';
import "../styles/AllTeamsStyles.css"



const AllTeams = ({schoolName, teamName, teamLogo, authTeamSrc, authTeamSrcName, linkTeamSrc, linkSrcTeamName, borderStyle, bgColour}) => {
  
  
  
  return (
    <>
    <div className='all-teams-comp-main-container' id={bgColour}>

        <div className='all-teams-comp-outer-container'>
            <div className='all-teams-comp-inner-container' id={borderStyle}>
                <h1>{schoolName}</h1>

                <img src={teamLogo} alt={`${teamName} Logo`}  width="150" height="150" />


                <div className="all-teams-credit">       
                    <a href={authTeamSrc} target="_blank" rel="noopener noreferrer">{authTeamSrcName} </a>
                    <a href={linkTeamSrc} target="_blank" rel="noopener noreferrer">{linkSrcTeamName}</a>   
                </div>

                <h1>{teamName}</h1>
            </div>


        </div>
    </div>

      

    </>
  );
}

export default AllTeams;
