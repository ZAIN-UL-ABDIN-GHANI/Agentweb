// src/context/AgentsContext.jsx
import React, { createContext, useContext, useState } from "react";
import initialData from "../../components/Agent/AgentData";

const AgentsContext = createContext();

export function AgentsProvider({ children }) {
  const [agents, setAgents] = useState(initialData);

  const addAgent = (agent) => {
    const nextId = agents.length > 0 ? Math.max(...agents.map((a) => a.id)) + 1 : 1;
    setAgents([...agents, { ...agent, id: nextId }]);
  };

  const deleteAgent = (id) => {
    setAgents(agents.filter((a) => a.id !== id));
  };

  return (
    <AgentsContext.Provider value={{ agents, addAgent, deleteAgent }}>
      {children}
    </AgentsContext.Provider>
  );
}

export const useAgents = () => useContext(AgentsContext);
