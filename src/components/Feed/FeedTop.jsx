import React, {useState} from 'react'

const FeedTop = () => {
  const [active, setActive] = useState("forYou");

  return (
    <div className="sticky top-0 w-full h-14 bg-black z-10 border-b border-gray-600">
      <div className="relative flex h-full w-full">
        <button
          onClick={() => setActive("forYou")}
          className="h-full w-1/2 hover:bg-white/10 cursor-pointer"
        >
          For You
        </button>

        <button
          onClick={() => setActive("following")}
          className="h-full w-1/2 hover:bg-white/10 cursor-pointer"
        >
          Following
        </button>

        <div
          className={`absolute bottom-0 h-1 bg-blue-500 transition-all duration-300 ${
            active === "forYou"
              ? "left-0 w-1/2"
              : "left-1/2 w-1/2"
          }`}
        />
      </div>
    </div>
  )
}

export default FeedTop