import "../styles/global.css";
import Sidebar from "../components/Sidebar/Sidebar";
import RightPanel from "../components/RightPanel/RightPanel";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex justify-center bg-black text-white min-h-screen">
      <div className="flex w-full max-w-[1265px]">

        {/* Sidebar */}
        <aside className="w-[275px] px-2">
          <div className="sticky top-0 h-screen flex flex-col">
            <Sidebar />
          </div>
        </aside>

        {/* Middle content */}
        <main className="flex-1 max-w-[600px] border-l border-r border-[#2f3336]">
          <Outlet />
        </main>

        {/* Right Panel */}
        <aside className="w-[350px] pl-6 hidden lg:block">
          <div className="sticky top-0">
            <RightPanel />
          </div>
        </aside>

      </div>
    </div>
  );
};

export default Layout;