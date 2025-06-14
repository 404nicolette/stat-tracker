import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TournamentPage from "./pages/TournamentPage";
import TeamsPage from "./pages/TeamsPage";
import MainPage from "./pages/MainPage";
import Team from "./components/teams/Team";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/tournaments" element={<TournamentPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/test" element={<Team />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
