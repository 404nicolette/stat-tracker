import {BrowserRouter as Router, Routes,Route,} from "react-router-dom";

import LandingPage from "../src/pages/LandingPage"
import UAAPTPages from "./pages/UAAPTPages";
import SSLTPages from "./pages/SSLTPages";
import AllTeamsPages from "./pages/AllTeamsPages";
import AllTeams from "./components/AllTeams";



function App() {

  return (
    <>
      <Router>
           
            <Routes>
                <Route path="/landing-page" element={<LandingPage />} />
                <Route path="/tournament" element={<LandingPage />} />

                <Route path="/tournament/uaap" element={<UAAPTPages />} />
                <Route path="/tournament/ssl" element={<SSLTPages />} />
                <Route path="/all-teams" element={<AllTeamsPages />} />




                <Route path="/test-page" element={<AllTeams />} />

            </Routes>
        </Router>
    
      
      
    </>
  )
}

export default App
