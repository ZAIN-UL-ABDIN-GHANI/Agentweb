import React from "react";
import agentsData from "./AgentData";
import { FiCalendar, FiBell, FiList } from "react-icons/fi";

/**
 * Props:
 * - items: optional array of agent objects. If omitted, uses agentsData fallback.
 */
export default function AgentsCards({ items = null }) {
  const data = Array.isArray(items) ? items : agentsData;

  return (
    <div className="grid gap-12 md:gap-8 md:grid-cols-3">
      {data.map((agent) => (
        <article
          key={agent.id}
          className="relative rounded-2xl bg-[#1a1406] p-5 shadow-[0_10px_0_#5b009f] border-2 border-purLight"
        >
          {/* image panel */}
          <div className="relative rounded-md bg-purLight p-3 flex items-center justify-center overflow-hidden">
            {/* tag */}
            <span className="absolute top-2 right-2 rounded-full border border-purLight bg-extrapurLight text-pur px-3 py-1 text-xs font-semibold shadow-sm">
              {agent.tag}
            </span>

            <img
              src={agent.image}
              alt={agent.title}
              className="w-full h-[160px] object-contain"
              draggable="false"
            />
          </div>

          {/* Title + description */}
          <h3 className="mt-4 text-lg font-semibold text-white">
            {agent.title}
          </h3>
          <p className="mt-2 text-[13px] text-white/90 leading-5 line-clamp-3">
            {agent.description}
          </p>

          {/* bullets */}
          <ul className="mt-4 space-y-3">
            {agent.bullets?.map((point, i) => (
              <li key={i} className="flex items-start text-gray-200 text-sm">
                <span className="flex items-center justify-center w-8 h-8 mt-0.5 mr-3 rounded-md bg-[00FFFF] border border-purLight">
                  {i === 0 ? (
                    <FiCalendar className="w-4 h-4" />
                  ) : i === 1 ? (
                    <FiBell className="w-4 h-4" />
                  ) : (
                    <FiList className="w-4 h-4" />
                  )}
                </span>
                <span className="mt-0.5">{point}</span>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <button
            type="button"
            className="mt-4 w-full rounded-lg bg-pur px-4 py-2 text-sm font-semibold text-black shadow-inner hover:bg-purLight transition"
          >
            Automate My Tasks
          </button>
        </article>
      ))}
    </div>
  );
}
