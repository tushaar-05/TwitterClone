import React from "react";
import CategoryTab from "./CategoryTab";

const ExplorePageCategoryTab = ({ activeTab, setActiveTab }) => {
  const Categories = ["For You", "Trending", "News", "Sports", "Entertainment"];

  return (
    <div className="w-full h-15 border-b border-[#2f3336] flex justify-around">
      {Categories.map((items,idx) => {
        return (
          <CategoryTab
            key={idx}
            category={items}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        );
      })}
    </div>
  );
};

export default ExplorePageCategoryTab;
