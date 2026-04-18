import React from "react";

const CategoryTab = (props) => {
  return (
      <div className="h-full w-fit flex justify-center items-center px-4 font-bold text-sm text-[#71767b] hover:bg-white/5 transition duration-200 cursor-pointer">
        {props.category}
      </div>
  );
};

export default CategoryTab;
