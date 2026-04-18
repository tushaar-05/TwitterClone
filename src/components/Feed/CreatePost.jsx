import React from "react";

import {
  Image,

} from "lucide-react"

const ICONS = [<Image color="blue" />, <Image />, <Image />]

const CreatePost = () => {
  return (
    <div className="w-full max-w-2xl mx-auto border border-gray-800 bg-black text-white rounded-xl p-4">
      
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-700 flex-shrink-0"></div>

        <input
          type="text"
          placeholder="What's happening?"
          className="w-full bg-transparent outline-none text-lg placeholder-gray-500"
        />
      </div>

      <div className="my-3"></div>

      <div className="flex items-center justify-between">
        
        <div className="flex gap-4 text-blue-500">
          {ICONS.map((icon) => (
            <button>{icon}</button>
          ))}
          
        </div>

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full font-semibold disabled:opacity-50">
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;