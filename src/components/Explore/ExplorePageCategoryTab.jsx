import React from "react";
import CategoryTab from "./CategoryTab";

const ExplorePageCategoryTab = ({ activeTab, setActiveTab }) => {
  const Categories = ["For You", "Trending", "News", "Sports", "Entertainment"];

  return (
    <div className="w-full border-b border-[#2f3336] flex overflow-x-auto scrollbar-hide">
      {Categories.map((item, idx) => (
        <CategoryTab
          key={idx}
          category={item}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      ))}
    </div>
  );
};

export default ExplorePageCategoryTab;