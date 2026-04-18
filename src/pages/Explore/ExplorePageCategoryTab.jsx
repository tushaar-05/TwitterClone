import React from "react";
import CategoryTab from "./CategoryTab";

const ExplorePageCategoryTab = () => {

    const Categories=["For You","Trending","News","Sports","Entertainment"]

  return (
    <div className="w-full h-15 border-b border-[#2f3336] flex justify-around">
        {Categories.map((items) => {
            return <CategoryTab category={items}/>
        })}
    </div>
  );
};

export default ExplorePageCategoryTab;
