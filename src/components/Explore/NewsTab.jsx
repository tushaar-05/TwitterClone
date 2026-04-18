import React from "react";

const NewsTab = (props) => {
  return (
    <div className="w-full h-1/3 mb-2  hover:bg-white/5 transition duration-200 cursor-pointer rounded-sm flex flex-col justify-around">
      <div className="w-full h-fit text-md font-bold leading-5.5">
        {props.title}
      </div>
      <div className="w-full h-1/3 flex items-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1746637466037-001842a48d31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
          className="w-6 h-6 rounded-full"
        ></img>
        <img
          src="https://images.unsplash.com/photo-1769006352025-1a429e69398f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
          className="w-6 h-6 bg-orange-500 rounded-full -ml-2.5"
        ></img>
        <img
          src="https://images.unsplash.com/photo-1772966971398-620d4bde08e5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
          className="w-6 h-6 bg-orange-500 rounded-full -ml-2.5"
        ></img>
        <div className="text-[#54585b] text-sm ml-2">
          {props.time}  &bull; {props.category} &bull; {props.posts} posts
        </div>
      </div>
    </div>
  );
};

export default NewsTab;
