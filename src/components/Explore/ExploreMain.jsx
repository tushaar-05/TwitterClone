import React, { useState } from "react";
import ExploreSearchbar from "./ExploreSearchbar";
import ExplorePageCategoryTab from "./ExplorePageCategoryTab";
import CategoryForYou from "./CategoryForYou";
import CategoryTrending from "./CategoryTrending";
import CategoryNews from "./CategoryNews";
import CategorySports from "./CategorySports";
import CategoryEntertainment from "./CategoryEntertainment";

const ExploreMain = () => {
  const [activeTab, setActiveTab] = useState("For You");

  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-md">
        <ExploreSearchbar />
        <ExplorePageCategoryTab
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="pb-20">
        {activeTab === "For You" && <CategoryForYou />}
        {activeTab === "Trending" && <CategoryTrending />}
        {activeTab === "News" && <CategoryNews/>}
        {activeTab === "Sports" && <CategorySports />}
        {activeTab === "Entertainment" && <CategoryEntertainment />}
      </div>
    </div>
  );
};

export default ExploreMain;
