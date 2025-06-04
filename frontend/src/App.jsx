import { useState } from "react";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TournamentPage from "./pages/TournamentPage";
import TeamsPage from "./pages/TeamsPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/tournaments" element={<TournamentPage />} />
        <Route path="/teams" element={<TeamsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
