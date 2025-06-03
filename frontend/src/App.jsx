import { useState } from "react";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TournamentPage from "./pages/TournamentPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/tournaments" element={<TournamentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
