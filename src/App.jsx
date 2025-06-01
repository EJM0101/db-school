import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import DiagramBD from "./components/DiagramBD";
import DiagramSGBD from "./components/DiagramSGBD";
import Compare from "./components/Compare";
import Quiz from "./components/Quiz";

const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/bd">BD</Link>
        <Link to="/sgbd">SGBD</Link>
        <Link to="/compare">Comparer</Link>
        <Link to="/quiz">Quiz</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bd" element={<DiagramBD />} />
          <Route path="/sgbd" element={<DiagramSGBD />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </>
  );
};

export default App;