import React from "react";

const NewsTab = (props) => {
  return (
    <div className="w-full py-3 hover:bg-white/5 transition duration-200 cursor-pointer rounded-sm flex flex-col gap-2">
      <div className="w-full text-md font-bold leading-tight">
        {props.title}
      </div>
      <div className="w-full flex items-center">
        <div className="flex -space-x-2">
          <img
            src="https://randomuser.me/api/portraits/men/11.jpg"
            className="w-5 h-5 rounded-full border border-black"
          />
          <img
            src="https://randomuser.me/api/portraits/women/12.jpg"
            className="w-5 h-5 rounded-full border border-black"
          />
        </div>
        <div className="text-[#71767b] text-xs sm:text-sm ml-2">
          {props.time}  &bull; {props.category} &bull; {props.posts} posts
        </div>
      </div>
    </div>
  );
};

export default NewsTab;
