import React from "react";
import { Search, Settings } from "lucide-react";

const ExploreSearchbar = () => {
  return (
    <div className="flex items-center gap-3 w-full h-12 px-3 sm:px-4">
      <div className="flex-1 h-9 rounded-full border border-[#2f3336] flex items-center gap-2 px-3 focus-within:border-blue-400 transition-colors">
        <Search className="text-[#71767b] w-4 h-4 shrink-0" />
        <input
          className="flex-1 bg-transparent outline-none text-white placeholder-[#71767b] text-sm"
          placeholder="Search"
        />
      </div>
      <Settings className="w-5 h-5 text-white shrink-0 cursor-pointer" />
    </div>
  );
};

export default ExploreSearchbar;