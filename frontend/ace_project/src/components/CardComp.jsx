import "../styles/CardCompStyles.css"
import { useNavigate } from 'react-router-dom';



const CardComp = ({ title, logoSrc, authSrc, authSrcName, linkSrc, linkSrcName,redirectTo  }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(redirectTo); 
  };
  
  
  return (
    <>

      <button className="btn-card-comp" onClick={handleCardClick} >
      
    
      <div className="uaap-main-container">
        <div className='uaap-outer-container'>
          <div className='uaap-inner-container'>        
            <h4>{title}</h4> 
            <img src={logoSrc} alt={`${title} Logo`} width="150" height="150" /> 
            
            <div className="credit">
                
              <a href={authSrc} target="_blank" rel="noopener noreferrer">{authSrcName} </a>
              <a href={linkSrc} target="_blank" rel="noopener noreferrer">{linkSrcName}</a>
                
            </div>
          </div>
        </div>
      </div>
    </button>


    </>
  );
}

export default CardComp;
