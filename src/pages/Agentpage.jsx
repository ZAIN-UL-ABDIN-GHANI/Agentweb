// src/pages/Agentpage.jsx
import React, { useState, useMemo } from "react";
import AgentsFilterControls from "../components/Agent/AgentsFilter";
import AgentsCards from "../components/Agent/AgentCard";
import agentsData from "../components/Agent/AgentData";
import Pagination from "../components/Agent/AgentPaginations";

// Helpers
const tokensFrom = (q = "") =>
  q
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

// simple relevance scoring (counts occurrences)
function relevanceScore(item, tokens) {
  if (!tokens.length) return 0;
  const hay = `${item.title ?? ""} ${item.description ?? ""} ${item.tag ?? ""} ${
    (item.keywords || []).join(" ")
  }`.toLowerCase();
  let score = 0;
  tokens.forEach((t) => {
    const re = new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
    score += (hay.match(re) || []).length;
  });
  return score;
}

export default function AgentPage() {
  const [filters, setFilters] = useState({
    query: "",
    debouncedQuery: "",
    selectedTags: [],
    sort: "relevance",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6; // cards per page

  function handleFilterChange(update) {
    setFilters((prev) => ({ ...prev, ...update }));
    setCurrentPage(1); // reset to page 1 whenever filters change
  }

  const filtered = useMemo(() => {
    const { debouncedQuery, selectedTags = [], sort } = filters;
    const tokens = tokensFrom(debouncedQuery);

    const list = agentsData.filter((a) => {
      if (selectedTags.length > 0 && !selectedTags.includes(a.tag)) return false;
      if (!tokens.length) return true;
      const hay = `${a.title} ${a.description} ${a.tag} ${(a.keywords || []).join(" ")}`.toLowerCase();
      return tokens.every((t) => hay.includes(t));
    });

    const scored = list.map((a) => ({ ...a, _score: relevanceScore(a, tokens) }));

    if (sort === "relevance") {
      scored.sort((x, y) => y._score - x._score || (x.title || "").localeCompare(y.title || ""));
    } else if (sort === "az") {
      scored.sort((x, y) => (x.title || "").localeCompare(y.title || ""));
    } else if (sort === "za") {
      scored.sort((x, y) => (y.title || "").localeCompare(x.title || ""));
    }

    return scored;
  }, [filters]);

  // Pagination slice
  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="min-h-screen px-[4%] md:px-[6%] mt-[20%] sm:mt-[2%] md:mt-[6%] bg-gradient-to-b from-black via-[#1a1406] to-black text-white py-8">
      {/* Header */}
      <div className="max-w-3xl   mx-auto text-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">
          Explore All <span className="text-pur">AI Agent Solutions</span>
        </h1>
        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto px-[3%]">
          Unlock the full potential of Artificial Intelligence with our complete suite of AI Agent
          solutions. Whether you are looking to automate customer support or streamline research,
          we’ve got you covered.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-[4%] md:px-[0.4%]">
        {/* Filters */}
        <AgentsFilterControls
          initialQuery={filters.query}
          initialSort={filters.sort}
          onChange={handleFilterChange}
        />

        {/* Paginated Cards */}
        <AgentsCards items={paginated} query={filters.debouncedQuery} />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(p) => setCurrentPage(p)}
        />
      </div>
    </div>
  );
}
