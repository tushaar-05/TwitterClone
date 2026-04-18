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
    <div className="pt-1">
      <ExploreSearchbar />
      <ExplorePageCategoryTab
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab === "For You" && <CategoryForYou />}
      {activeTab === "Trending" && <CategoryTrending />}
      {activeTab === "News" && <CategoryNews/>}
      {activeTab === "Sports" && <CategorySports />}
      {activeTab === "Entertainment" && <CategoryEntertainment />}
    </div>
  );
};

export default ExploreMain;
