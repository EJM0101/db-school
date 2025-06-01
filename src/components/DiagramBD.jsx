import React from "react";
import { ReactFlow, Background } from "reactflow";
import "reactflow/dist/style.css";

const elements = [
  { id: "1", type: "input", data: { label: "Table Clients" }, position: { x: 100, y: 100 } },
  { id: "2", type: "default", data: { label: "Table Produits" }, position: { x: 300, y: 100 } }
];

const DiagramBD = () => (
  <div>
    <h2>Visualisation : Base de Données</h2>
    <p>Une base de données est simplement une structure de données sans gestion logicielle.</p>
    <div style={{ height: 300 }}>
      <ReactFlow nodes={elements} edges={[]} fitView>
        <Background />
      </ReactFlow>
    </div>
  </div>
);

export default DiagramBD;