// src/pages/AgentPage.jsx
import React, { useState, useMemo } from "react";
import { useAgents } from "../Admin/context/adminContext";
import AgentsFilterControls from "../components/Agent/AgentsFilter";
import AgentsCards from "../components/Agent/AgentCard";
import Pagination from "../components/Agent/AgentPaginations";

const tokensFrom = (q = "") =>
  q.toLowerCase().split(/\s+/).filter(Boolean);

export default function AgentPage() {
  const { agents } = useAgents();
  const [filters, setFilters] = useState({ query: "", debouncedQuery: "", selectedTags: [], sort: "relevance" });
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const filtered = useMemo(() => {
    const tokens = tokensFrom(filters.debouncedQuery);
    return agents.filter((a) => {
      if (filters.selectedTags.length && !filters.selectedTags.includes(a.tag)) return false;
      if (!tokens.length) return true;
      return tokens.every((t) =>
        `${a.title} ${a.description} ${a.tag}`.toLowerCase().includes(t)
      );
    });
  }, [agents, filters]);

  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="min-h-screen px-[4%] md:px-[6%] mt-[16%] md:mt-[7%] bg-gradient-to-b from-black via-[#1a1406] to-black text-white py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">
          Explore All <span className="text-pur">AI Agent Solutions</span>
        </h1>
        <p className="text-gray-300 mt-2">
          Discover AI Agents created dynamically from the Admin Panel.
        </p>
      </div>

      <AgentsFilterControls
        initialQuery={filters.query}
        initialSort={filters.sort}
        onChange={(u) => setFilters({ ...filters, ...u })}
      />

      <AgentsCards items={paginated} query={filters.debouncedQuery} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(p) => setCurrentPage(p)}
      />
    </div>
  );
}
