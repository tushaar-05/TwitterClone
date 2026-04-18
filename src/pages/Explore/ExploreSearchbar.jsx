import React from "react";
import { Search,Settings } from "lucide-react";

const ExploreSearchbar = () => {
  return (
    <div className="flex items-center justify-between w-full h-11.5 px-4">
      <div className="w-6/7 h-full rounded-full border-1 border-[#2f3336] flex gap-2 focus-within:border-blue-50">
        <Search className="mt-3 ml-2.5 text-[#71767b] w-5 h-5" />
        <input className="w-full outline-none" placeholder="Search" />
      </div>
      <Settings className="w-5 h-5"/>
    </div>
  );
};

export default ExploreSearchbar;
