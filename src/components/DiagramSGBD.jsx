import React from "react";
import { ReactFlow, Background } from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
  { id: "1", type: "input", data: { label: "Utilisateur" }, position: { x: 0, y: 0 } },
  { id: "2", data: { label: "SQL Interface" }, position: { x: 150, y: 0 } },
  { id: "3", data: { label: "Moteur SGBD" }, position: { x: 300, y: 0 } },
  { id: "4", data: { label: "Table Clients" }, position: { x: 200, y: 100 } },
  { id: "5", data: { label: "Table Produits" }, position: { x: 350, y: 100 } }
];

const edges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3", animated: true },
  { id: "e3-4", source: "3", target: "4", animated: true },
  { id: "e3-5", source: "3", target: "5", animated: true }
];

const DiagramSGBD = () => (
  <div>
    <h2>Visualisation : SGBD</h2>
    <p>Un SGBD gère les utilisateurs, les requêtes, la sécurité et les interactions avec les données.</p>
    <div style={{ height: 350 }}>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
      </ReactFlow>
    </div>
  </div>
);

export default DiagramSGBD;