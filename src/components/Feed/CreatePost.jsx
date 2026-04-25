import { useState } from "react";
import { Image, Film, BarChart2, Smile, CalendarClock, MapPin, Flag, Plus } from "lucide-react";

const MAX = 280;

const ICONS = [
  { Icon: Image, title: "Media" },
  { Icon: Film, title: "GIF" },
  { Icon: BarChart2, title: "Poll" },
  { Icon: Smile, title: "Emoji" },
  { Icon: CalendarClock, title: "Schedule" },
  { Icon: MapPin, title: "Location" },
  { Icon: Flag, title: "Topics" },
];

export default function CreatePost() {
  const [text, setText] = useState("");
  const remaining = MAX - text.length;
  const isDisabled = text.length === 0 || remaining < 0;

  return (
    <div className="w-full max-w-2xl mx-auto border border-gray-800 bg-black text-white p-4">
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-700 flex-shrink-0 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/profilepic.svg"
            alt="Profile"
          />
        </div>
        <div className="flex-1">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What's happening?"
            className="w-full bg-transparent outline-none text-xl placeholder-gray-500 resize-none"
            rows={2}
          />
          {text.length > 0 && (
            <span className="text-blue-400 text-sm font-semibold border border-blue-400 rounded-full px-3 py-0.5 cursor-pointer">
              Everyone ▾
            </span>
          )}
        </div>
      </div>

      <div className="border-t border-gray-800 my-3" />

      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          {ICONS.map(({ Icon, title }) => (
            <button
              key={title}
              title={title}
              className="p-2 rounded-full text-blue-500 hover:bg-blue-950 transition-colors"
            >
              <Icon size={19} strokeWidth={1.75} />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {text.length > 0 && (
            <>
              {remaining <= 20 && (
                <span className={`text-sm font-medium ${remaining < 0 ? "text-red-500" : "text-yellow-400"}`}>
                  {remaining}
                </span>
              )}
              <div className="w-px h-6 bg-gray-800" />
              <button className="w-[26px] h-[26px] border border-gray-700 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-950 transition-colors">
                <Plus size={14} strokeWidth={2.5} />
              </button>
            </>
          )}
          <button
            disabled={isDisabled}
            onClick={() => setText("")}
            className="bg-blue-500 hover:bg-blue-400 disabled:opacity-50 disabled:cursor-not-allowed text-white px-5 py-2 rounded-full font-bold text-sm transition-colors"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}