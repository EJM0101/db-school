import React from "react";
import ReactFlow from "react-flow-renderer";

const elements = [
  { id: "1", type: "input", data: { label: "Utilisateur" }, position: { x: 50, y: 50 } },
  { id: "2", data: { label: "Interface SQL" }, position: { x: 200, y: 50 } },
  { id: "3", data: { label: "Moteur SGBD" }, position: { x: 350, y: 50 } },
  { id: "4", data: { label: "Table Clients" }, position: { x: 250, y: 150 } },
  { id: "5", data: { label: "Table Produits" }, position: { x: 400, y: 150 } },
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3", animated: true },
  { id: "e3-4", source: "3", target: "4", animated: true },
  { id: "e3-5", source: "3", target: "5", animated: true },
];

const DiagramSGBD = () => (
  <div>
    <h2>Visualisation : SGBD</h2>
    <p>Le SGBD permet à l'utilisateur d'accéder, modifier et gérer les données avec une couche de sécurité et d'interfaces.</p>
    <div style={{ height: 400 }}>
      <ReactFlow elements={elements} />
    </div>
  </div>
);

export default DiagramSGBD;