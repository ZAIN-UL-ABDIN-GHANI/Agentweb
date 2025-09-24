import React, { useState, useEffect, useRef, useCallback } from "react";

/**
 * Props:
 * - initialQuery: string
 * - initialSort: "relevance"|"az"|"za"
 * - debounceMs: number
 * - onChange: function({ query, debouncedQuery, sort })  -> called when debouncedQuery or sort change
 *
 * This component is data-agnostic — parent keeps rendering & filtering.
 */
export default function AgentsFilterControls({
  initialQuery = "",
  initialSort = "relevance",
  debounceMs = 300,
  onChange = () => {},
}) {
  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);
  const [sort, setSort] = useState(initialSort);
  const debounceRef = useRef(null);

  // Debounce the query input
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setDebouncedQuery(query.trim());
    }, debounceMs);

    return () => clearTimeout(debounceRef.current);
  }, [query, debounceMs]);

  // Emit state to parent whenever debouncedQuery or sort changes
  useEffect(() => {
    onChange({
      query,
      debouncedQuery,
      sort,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery, sort]);

  const clearAll = useCallback(() => {
    setQuery("");
    setSort(initialSort);
  }, [initialSort]);

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-6">
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <label htmlFor="agents-filter-search" className="sr-only">
          Search agents
        </label>

        <input
          id="agents-filter-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search title, description, keywords..."
          className="flex-1 bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pur"
          aria-label="Search agents"
        />

        <div className="flex items-center gap-2">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort agents"
            className="bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-sm"
          >
            <option value="relevance">Relevance</option>
            <option value="az">Title A → Z</option>
            <option value="za">Title Z → A</option>
          </select>

          <button
            onClick={clearAll}
            className="px-3 py-2 rounded-md border border-gray-700 text-sm text-gray-300 hover:bg-gray-800"
            aria-label="Clear filters"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
