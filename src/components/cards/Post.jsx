import React from "react";
import { MessageCircle, Repeat2, Heart, BarChart2, Bookmark, Share } from "lucide-react";
import "../../styles/global.css"

export default function PostCard() {
  return (
    <div className="max-w-2xl mx-auto bg-black text-white p-4 rounded-xl border border-gray-800">
      
      {true&&<p className="text-gray-400 text-sm mb-2">📌 Pinned by Community mods</p>} 

      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold">
            Programmers Club{" "}
            <span className="text-gray-400 text-sm">@mcqmaster · Feb 2, 2025</span>
          </p>
        </div>
      </div>


      <p className="text-lg mb-2">
        100 Days of JavaScript: Daily Coding Exercises for Interview Preparation
      </p>

      <p className="text-blue-400 mb-2">udemy.com/course/javascript</p>

      <p className="text-blue-400 mb-4">
        #javascript #coding #programming #tech #ai #udemy
      </p>

      {/* Image Card */}
      <div className="rounded-2xl overflow-hidden border border-gray-700 mb-4">
        <div className="flex">
          
          {/* Left yellow */}
          <div className="bg-yellow-400 w-1/2 flex items-center justify-center">
            <h1 className="text-7xl font-bold text-black">JS</h1>
          </div>

          {/* Right image */}
          <div className="w-1/2 relative">
            <img
              src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f"
              alt="coding"
              className="w-full h-full object-cover"
            />

            {/* Bottom overlay text */}
            <div className="absolute bottom-2 left-2 right-2">
              <span className="bg-black/70 text-xs px-2 py-1 rounded">
                100+ JavaScript Coding Practice Test Questions Answers 2026
              </span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-gray-400 text-sm p-2">
          From udemy.com
        </div>
      </div>

      <div className="flex justify-between text-gray-400 text-sm px-2">
        <div className="flex items-center gap-1 hover:text-blue-400 cursor-pointer">
          <MessageCircle size={18} /> 12
        </div>
        <div className="flex items-center gap-1 hover:text-green-400 cursor-pointer">
          <Repeat2 size={18} /> 14
        </div>
        <div className="flex items-center gap-1 hover:text-red-400 cursor-pointer">
          <Heart size={18} /> 124
        </div>
        <div className="flex items-center gap-1">
          <BarChart2 size={18} /> 30K
        </div>
        <div className="flex items-center gap-3">
          <Bookmark size={18} />
          <Share size={18} />
        </div>
      </div>
    </div>
  );
}