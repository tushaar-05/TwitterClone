import Sidebar from "../../components/Sidebar/Sidebar";
import ExploreMain from "./ExploreMain";
import ExploreRightPanel from "./ExploreRightPanel";
import React from "react";

const Explore = () => {
  return (
    <div className="flex justify-center bg-black text-white min-h-screen">
      <div className="flex w-full max-w-[1265px]">
        <aside className="w-[275px] px-2">
          <div className="sticky top-0 h-screen flex flex-col">
            <Sidebar />
          </div>
        </aside>

        <main className="flex-1 max-w-[600px] border-l border-r border-[#2f3336]">
          <ExploreMain/>
        </main>

        <aside className="w-[350px] pl-6 hidden lg:block">
          <div className="sticky top-0 ">
            <ExploreRightPanel/>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Explore;
