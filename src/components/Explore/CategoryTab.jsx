import React from "react";

const CategoryTab = ({ category, activeTab, setActiveTab }) => {
  const isActive = activeTab === category;

  return (
    <button
      onClick={() => setActiveTab(category)}
      className="flex-shrink-0 flex flex-col items-center justify-center h-12 px-4 sm:px-6 relative hover:bg-white/5 transition-colors cursor-pointer"
    >
      <span className={`text-sm sm:text-base whitespace-nowrap ${isActive ? "font-bold text-white" : "text-[#71767b]"}`}>
        {category}
      </span>
      {isActive && (
        <div className="absolute bottom-0 h-[4px] min-w-[56px] w-[60%] bg-blue-500 rounded-full" />
      )}
    </button>
  );
};

export default CategoryTab;