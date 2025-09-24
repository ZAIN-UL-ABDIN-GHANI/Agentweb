// src/components/common/Pagination.jsx
import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;


  const pages = [];
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 rounded-md border border-gray-700 text-sm transition
          ${currentPage === 1
            ? "text-gray-500 cursor-not-allowed"
            : "text-gray-300 hover:bg-gray-800"}`}
      >
        Prev
      </button>

      {/* First page if not visible */}
      {start > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className={`px-3 py-2 rounded-md text-sm transition
              ${currentPage === 1
                ? "bg-pur text-black font-semibold"
                : "text-gray-300 hover:bg-gray-800"}`}
          >
            1
          </button>
          {start > 2 && <span className="text-gray-500">…</span>}
        </>
      )}

      {/* Middle pages */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-2 rounded-md text-sm transition
            ${page === currentPage
              ? "bg-pur text-black font-semibold"
              : "text-gray-300 hover:bg-gray-800"}`}
        >
          {page}
        </button>
      ))}

      {/* Last page if not visible */}
      {end < totalPages && (
        <>
          {end < totalPages - 1 && <span className="text-gray-500">…</span>}
          <button
            onClick={() => onPageChange(totalPages)}
            className={`px-3 py-2 rounded-md text-sm transition
              ${currentPage === totalPages
                ? "bg-pur text-black font-semibold"
                : "text-gray-300 hover:bg-gray-800"}`}
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 rounded-md border border-gray-700 text-sm transition
          ${currentPage === totalPages
            ? "text-gray-500 cursor-not-allowed"
            : "text-gray-300 hover:bg-gray-800"}`}
      >
        Next
      </button>
    </div>
  );
}
