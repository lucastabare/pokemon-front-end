import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PokemonPage from "./pages/pokemon";
const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/pokemon" key="/pokemon" element={<PokemonPage />} />
        </Routes>
      </Router>
    </>

  );
};

export default AppRouter;
