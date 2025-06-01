import React from "react";
import ReactFlow from "react-flow-renderer";

const elements = [
  { id: "1", type: "input", data: { label: "Table Clients" }, position: { x: 100, y: 100 } },
  { id: "2", type: "default", data: { label: "Table Produits" }, position: { x: 300, y: 100 } },
];

const DiagramBD = () => (
  <div>
    <h2>Visualisation : Base de Données</h2>
    <p>Voici une base de données simple sans gestion ni interface utilisateur.</p>
    <div style={{ height: 300 }}>
      <ReactFlow elements={elements} />
    </div>
  </div>
);

export default DiagramBD;