import React from 'react'
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
  { label: 'Home', active: true, icon: <Home /> , path: "/"},
  { label: 'Explore', icon: <Search /> , path: "/explore"},
  { label: 'Notifications', icon: <Bell />, badge: 3 , path: "/"},
  { label: 'Follow', icon: <Users /> , path: "/"},
  { label: 'Chat', icon: <MessageCircle /> , path: "/"},
  { label: 'Grok', icon: <Sparkles /> , path: "/"},
  { label: 'Bookmarks', icon: <Bookmark /> , path: "/"},
  { label: 'Creator Studio', icon: <Rocket /> , path: "/"},
  { label: 'Premium', icon: <Sparkles /> , path: "/"},
  { label: 'Profile', icon: <User /> , path: "/profile"},
  { label: 'More', icon: <MoreHorizontal /> , path: "/"},
]

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen w-64 bg-black text-white px-3 py-2">
      <div className="p-3 mb-1">
        <img src="TwitterLogoWhite.svg" alt="Twitter Logo" className="w-8 h-8" />
      </div>

      <nav className="flex flex-col gap-1">
        {NAV_ITEMS.map(({ label, active, icon, badge, path}) => (
          <a
            key={label}
            href={path}
            className={`flex items-center gap-4 px-4 py-3 rounded-full text-lg hover:bg-white/10 transition-colors ${
              active ? 'font-bold' : 'font-normal'
            }`}
          >
            <span className="relative w-6 h-6 flex items-center justify-center flex-shrink-0">
              {icon}
              {badge !== undefined && (
                <span className="absolute -top-1.5 -right-1.5 bg-blue-500 text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {badge}
                </span>
              )}
            </span>
            {label}
          </a>
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
          <p className="text-sm font-bold flex items-center gap-1">
            Tushar Singh
          </p>
          <p className="text-xs text-white/55">@tushaar_05</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar