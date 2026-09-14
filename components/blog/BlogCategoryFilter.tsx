"use client";

import { useState } from "react";

interface BlogCategoryFilterProps {
  categories: readonly string[];
  onFilterChange: (category: string) => void;
}

export default function BlogCategoryFilter({ categories, onFilterChange }: BlogCategoryFilterProps) {
  const [active, setActive] = useState("All");

  const handleChange = (cat: string) => {
    setActive(cat);
    onFilterChange(cat);
  };

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 hide-scrollbar">
      {categories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => handleChange(cat)}
            className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 border ${
              isActive
                ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20"
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}