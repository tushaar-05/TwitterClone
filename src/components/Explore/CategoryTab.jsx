import React, { useState } from "react";

const CategoryTab=({ category, activeTab, setActiveTab }) => {
  const isActive=activeTab===category;
  return (
    <div
      onClick={() => setActiveTab(category)}
      className={`h-full w-fit flex justify-center items-center px-4 font-bold text-sm text-[#71767b] hover:bg-white/5 transition duration-200 cursor-pointer ${isActive?"text-white border-b-4 border-[#1c9bf1]":""}`}
    >
      {category}
    </div>
  );
};

export default CategoryTab;
