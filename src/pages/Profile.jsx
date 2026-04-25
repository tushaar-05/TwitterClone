import React from "react";
import { ArrowLeft, BadgeCheck, Search, CalendarDays } from "lucide-react";

const Profile = () => {
  return (
    <div className="flex flex-col bg-black text-white min-h-screen w-full">

      <div className="h-14 flex items-center justify-between px-4 sticky top-0 bg-black z-10">
        <div className="flex items-center gap-3 sm:gap-6 min-w-0">
          <ArrowLeft size={24} className="shrink-0" />
          <div className="min-w-0">
            <h3 className="text-lg sm:text-xl font-semibold truncate">
              Saurabh Singh Airee
            </h3>
            <p className="text-sm text-gray-400">0 posts</p>
          </div>
        </div>
        <Search size={20} className="shrink-0 hover:bg-[#181818] rounded-full p-1 cursor-pointer" />
      </div>

      <div className="bg-[#333639] w-full aspect-[3/1] sm:h-44 sm:aspect-auto" />

      <div className="bg-black relative pb-4">

        <div className="absolute -top-10 sm:-top-16 left-4">
          <img
            src="/GoogleLogo.svg"
            alt="profile"
            className="w-20 h-20 sm:w-32 sm:h-32 rounded-full border-4 border-black object-cover"
          />
        </div>

        <div className="pt-4 sm:pt-5 px-4">

          <div className="flex justify-end">
            <button className="border border-[#4E5F6B] rounded-full px-4 py-1 mb-3 sm:mb-4 text-sm font-semibold hover:bg-[#181818]">
              Edit profile
            </button>
          </div>

          <div className="mt-2 sm:mt-3 flex items-center gap-2 flex-wrap">
            <h3 className="text-xl sm:text-2xl font-bold">
              Saurabh Singh Airee
            </h3>
            <div className="flex items-center gap-1 border border-[#536471] rounded-full px-2 py-[2px] text-sm hover:bg-[#181818] cursor-pointer">
              <BadgeCheck size={16} color="#1C9BF1" />
              <span>Get verified</span>
            </div>
          </div>

          <p className="text-gray-400 text-sm sm:text-base">@Sauravvbh</p>

          <div className="flex items-center gap-2 text-gray-400 mt-2 text-sm sm:text-base">
            <CalendarDays size={16} className="shrink-0" />
            Joined July 2024
          </div>

          <div className="flex gap-4 sm:gap-5 mt-2 text-gray-400 text-sm sm:text-base">
            <span><span className="text-white font-semibold">0</span> followers</span>
            <span><span className="text-white font-semibold">0</span> following</span>
          </div>
        </div>
      </div>

      <div className="flex border-b border-[#2f3336] text-gray-500 overflow-x-auto scrollbar-hide">
        {["Posts", "Replies", "Highlights", "Articles", "Media", "Likes"].map((tab, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-3 sm:px-4 py-3 hover:bg-[#181818] cursor-pointer whitespace-nowrap text-sm sm:text-base"
          >
            {tab}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Profile;