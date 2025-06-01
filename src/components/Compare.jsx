import React, { useState } from "react";
import DiagramBD from "./DiagramBD";
import DiagramSGBD from "./DiagramSGBD";

const Compare = () => {
  const [view, setView] = useState("bd");

  return (
    <div>
      <h2>Comparer BD vs SGBD</h2>
      <p>Utilisez les boutons ci-dessous pour comparer visuellement les deux concepts.</p>
      <button onClick={() => setView("bd")}>Voir BD</button>
      <button onClick={() => setView("sgbd")}>Voir SGBD</button>
      {view === "bd" ? <DiagramBD /> : <DiagramSGBD />}
    </div>
  );
};

export default Compare;