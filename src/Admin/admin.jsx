// src/pages/AdminAgents.jsx
import React, { useState } from "react";
import AgentsDataInitial from "../components/Agent/AgentData";

export default function AdminAgents() {
  const [agents, setAgents] = useState(AgentsDataInitial);

  const [newAgent, setNewAgent] = useState({
    id: "",
    tag: "",
    title: "",
    image: "",
    description: "",
    bullets: [],
  });

  // Add new agent
  const handleAddAgent = () => {
    setAgents([...agents, { ...newAgent, id: Date.now() }]);
    setNewAgent({ id: "", tag: "", title: "", image: "", description: "", bullets: [] });
  };

  // Delete agent by id
  const handleDeleteAgent = (id) => {
    setAgents(agents.filter((agent) => agent.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage AI Agents</h2>

      {/* Add New Agent */}
      <div className="mb-6 border p-4 rounded">
        <h3 className="font-semibold mb-2">Add New Agent</h3>
        <input
          type="text"
          placeholder="Tag"
          value={newAgent.tag}
          onChange={(e) => setNewAgent({ ...newAgent, tag: e.target.value })}
          className="border p-1 mr-2"
        />
        <input
          type="text"
          placeholder="Title"
          value={newAgent.title}
          onChange={(e) => setNewAgent({ ...newAgent, title: e.target.value })}
          className="border p-1 mr-2"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newAgent.image}
          onChange={(e) => setNewAgent({ ...newAgent, image: e.target.value })}
          className="border p-1 mr-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={newAgent.description}
          onChange={(e) => setNewAgent({ ...newAgent, description: e.target.value })}
          className="border p-1 mr-2"
        />
        <button
          onClick={handleAddAgent}
          className="bg-purple-600 text-white px-4 py-1 rounded"
        >
          Add Agent
        </button>
      </div>

      {/* List of Agents */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {agents.map((agent) => (
          <div key={agent.id} className="border p-4 rounded shadow">
            <img src={agent.image} alt={agent.title} className="h-32 w-full object-cover mb-2" />
            <h3 className="font-bold">{agent.title}</h3>
            <p className="text-sm mb-2">{agent.description}</p>
            <ul className="list-disc list-inside text-sm mb-2">
              {agent.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <button
              onClick={() => handleDeleteAgent(agent.id)}
              className="bg-red-600 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
