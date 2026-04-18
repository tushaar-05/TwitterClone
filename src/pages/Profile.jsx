import React from "react";
import { ArrowLeft, BadgeCheck, Search, CalendarDays } from "lucide-react";

const Profile = () => {
  return (
    <div className="flex flex-col bg-black w-[35%] h-screen text-white">

      {/* Pehela div */}
      <div className="h-14 flex items-center justify-between px-4">
        <div className="flex items-center gap-6 ">
          <ArrowLeft size={24} />
          <div>
            <h3 className="text-xl font-semibold">
              Saurabh Singh Airee
            </h3>
            <p className="text-sm text-gray-400">0 posts</p>
          </div>
        </div>
        <Search size={24} className="hover:bg-[#181818] transition rounded-full size-5"/>
      </div>

      {/* Gray vala item */}
      <div className="bg-[#333639] h-45"></div>

      {/* Kala vala div */}
      <div className="bg-black relative pb-4">

        {/* Apni image */}
        <div className="absolute -top-16 left-4"> {/* Pehela div */}
          <img
            src="/GoogleLogo.svg"
            alt="profile"
            className="w-32 h-32 rounded-full border-4 border-black object-cover"
          />
        </div>

        {/* naam vagera */}
        <div className="pt-5 px-4"> {/* doosra div */}

          <div className="flex justify-end">
            <button className="border border-[#4E5F6B] rounded-full px-4 py-1 mb-4 text-sm font-semibold hover:bg-[#181818] transition">
              Edit profile
            </button>
          </div>

          <div className="mt-3 flex items-center gap-2 flex-wrap">
            <h3 className="text-2xl font-bold">
              Saurabh Singh Airee
            </h3>

            <div className="flex items-center gap-1 border border-[#536471] rounded-full px-2 py-[2px] text-sm hover:bg-[#181818] transition">
              <BadgeCheck size={16} color="#1C9BF1" />
              <span>Get verified</span>
            </div>
          </div>

          <p className="text-gray-400">@Sauravvbh</p>

          <div className="flex items-center gap-2 text-gray-400 mt-2 cursor-pointer">
            <CalendarDays size={16} />
            Joined July 2024
          </div>

          {/* Followers and following */}
          <div className="flex gap-5 mt-2 text-gray-400">
            0 followers   0 following
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex border-b border-[#2f3336] text-gray-500">

        <div className="px-4 py-3 relative cursor-pointer hover:bg-[#181818]">
          Posts
        </div>

        <div className="px-4 py-3 hover:bg-[#181818] cursor-pointer">
          Replies
        </div>

        <div className="px-4 py-3 hover:bg-[#181818] cursor-pointer">
          Highlights
        </div>

        <div className="px-4 py-3 hover:bg-[#181818] cursor-pointer">
          Articles
        </div>

        <div className="px-4 py-3 hover:bg-[#181818] cursor-pointer">
          Media
        </div>

        <div className="px-4 py-3 hover:bg-[#181818] cursor-pointer">
          Likes
        </div>
      </div>

    </div>
  );
};

export default Profile;