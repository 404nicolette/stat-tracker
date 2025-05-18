import {BrowserRouter as Router, Routes,Route,} from "react-router-dom";

import LandingPage from "../src/pages/LandingPage"
import UAAPComp from "./components/CardComp";
function App() {

  return (
    <>
      <Router>
           
            <Routes>
                <Route path="/landing-page" element={<LandingPage />} />
                <Route path="/test-page" element={<UAAPComp />} />

            </Routes>
        </Router>
    
      
      
    </>
  )
}

export default App
