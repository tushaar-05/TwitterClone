import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import {
  Home, Search, Bell, Users, User, MessageCircle,
  Bookmark, Rocket, MoreHorizontal, Sparkles, LogOut
} from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Home',icon: <Home />, path: "/feed" },
  { label: 'Explore',icon: <Search />, path: "/explore" },
  { label: 'Notifications',  icon: <Bell />, badge: 3, path: "/notifications" },
  { label: 'Follow',icon: <Users />, path: "/follow" },
  { label: 'Chat',icon: <MessageCircle />,  path: "/chat" },
  { label: 'Grok',icon: <Sparkles />, path: "/grok" },
  { label: 'Bookmarks',icon: <Bookmark />, path: "/bookmarks" },
  { label: 'Creator Studio', icon: <Rocket />, path: "/creator" },
  { label: 'Premium',icon: <Sparkles />, path: "/premium" },
  { label: 'Profile',icon: <User />, path: "/profile" },
  { label: 'More',icon: <MoreHorizontal />, path: "/more" },
]

const Sidebar = () => {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);

  const formData = JSON.parse(localStorage.getItem('formData') || '{}');
  const fullName = formData.name;
  const handle = formData.username;

  const handleLogout = () => {
    setShowLogout(false);
    navigate('/');
  };

  const collapsed = window.innerWidth < 1024;

  return (
    <div className={`flex flex-col h-screen bg-black text-white px-2 py-2 border-r border-white/10 ${collapsed ? 'w-16 items-center' : 'w-64 px-3'}`}>

      <div className="p-2 mb-1 cursor-pointer" onClick={() => navigate("/")}>
        <img src="TwitterLogoWhite.svg" alt="Twitter Logo" className="w-8 h-8" />
      </div>

      <nav className="flex flex-col gap-1 w-full">
        {NAV_ITEMS.map(({ label, icon, badge, path }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-3 py-3 rounded-full hover:bg-white/10 transition-colors
              ${isActive ? 'font-bold' : 'font-normal'}
              ${collapsed ? 'justify-center' : ''}`
            }
          >
            <span className="relative w-6 h-6 flex items-center justify-center shrink-0">
              {icon}
              {badge !== undefined && (
                <span className="absolute -top-1.5 -right-1.5 bg-blue-500 text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {badge}
                </span>
              )}
            </span>
            {!collapsed && label}
          </NavLink>
        ))}
      </nav>

      {collapsed ? (
        <button
          className="mt-4 w-10 h-10 bg-white text-black font-bold text-xl rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center"
          title="Post"
        >
          +
        </button>
      ) : (
        <button className="mt-4 w-full bg-white text-black font-bold text-base py-3 rounded-full hover:bg-gray-200 transition-colors">
          Post
        </button>
      )}

      <div className="mt-auto relative w-full">
        {showLogout && (
          <div className="absolute bottom-full left-0 right-0 mb-2 bg-black border border-white/20 rounded-2xl shadow-lg overflow-hidden z-50">
            <div className="px-4 py-3 border-b border-white/10">
              <p className="text-sm font-bold">{fullName}</p>
              <p className="text-xs text-white/55">@{handle}</p>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-white/10 transition-colors text-left text-red-400"
            >
              <LogOut size={16} />
              {!collapsed && `Log out @${handle}`}
            </button>
          </div>
        )}

        <div
          onClick={() => setShowLogout(p => !p)}
          className={`flex items-center gap-2 px-2 py-2 rounded-full hover:bg-white/10 cursor-pointer transition-colors ${collapsed ? 'justify-center' : ''}`}
        >
          <div className="w-9 h-9 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
            <img
              src={formData.profilePic || "/profilepic.svg"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {!collapsed && (
            <>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold truncate">{fullName}</p>
                <p className="text-xs text-white/55 truncate">@{handle}</p>
              </div>
              <MoreHorizontal size={18} className="text-white/55 shrink-0" />
            </>
          )}
        </div>
      </div>

    </div>
  );
};

export default Sidebar;