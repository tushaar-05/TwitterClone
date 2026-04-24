import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import {
  Home,
  Search,
  Bell,
  Users,
  User,
  MessageCircle,
  Bookmark,
  Rocket,
  MoreHorizontal,
  Sparkles
} from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Home', icon: <Home />, path: "/feed" },
  { label: 'Explore', icon: <Search />, path: "/explore" },
  { label: 'Notifications', icon: <Bell />, badge: 3, path: "/notifications" },
  { label: 'Follow', icon: <Users />, path: "/follow" },
  { label: 'Chat', icon: <MessageCircle />, path: "/chat" },
  { label: 'Grok', icon: <Sparkles />, path: "/grok" },
  { label: 'Bookmarks', icon: <Bookmark />, path: "/bookmarks" },
  { label: 'Creator Studio', icon: <Rocket />, path: "/creator" },
  { label: 'Premium', icon: <Sparkles />, path: "/premium" },
  { label: 'Profile', icon: <User />, path: "/profile" },
  { label: 'More', icon: <MoreHorizontal />, path: "/more" },
]

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen w-64 bg-black text-white px-3 py-2">
      
      <div className="p-3 mb-1 cursor-pointer" onClick={() => navigate("/")}>
        <img src="TwitterLogoWhite.svg" alt="Twitter Logo" className="w-8 h-8" />
      </div>

      <nav className="flex flex-col gap-1">
        {NAV_ITEMS.map(({ label, icon, badge, path }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-full text-lg hover:bg-white/10 transition-colors ${
                isActive ? 'font-bold' : 'font-normal'
              }`
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
            {label}
          </NavLink>
        ))}
      </nav>

      <button className="mt-4 w-full bg-white text-black font-bold text-base py-3 rounded-full hover:bg-gray-200 transition-colors">
        Post
      </button>

      <div className="mt-auto flex items-center gap-2 px-3 py-2 rounded-full hover:bg-white/10 cursor-pointer transition-colors">
        <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
          TS
        </div>
        <div className="flex-1">
          <p className="text-sm font-bold">Tushar Singh</p>
          <p className="text-xs text-white/55">@tushaar_05</p>
        </div>
      </div>

    </div>
  )
}

export default Sidebar