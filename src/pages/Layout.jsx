import "../styles/global.css";
import Sidebar from "../components/Sidebar/Sidebar";
import RightPanel from "../components/RightPanel/RightPanel";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex justify-center bg-black text-white min-h-screen">
      <div className="flex w-full max-w-[1265px]">

        {/* Sidebar */}
        <aside className="w-[70px] lg:w-[275px] px-2">
          <div className="sticky top-0 h-screen flex flex-col w-full">
            <Sidebar />
          </div>
        </aside>

        {/* Middle content */}
        <main className="flex-1 border-[#2f3336] sm:border-l sm:border-r lg:max-w-[600px]">
          <Outlet />
        </main>

        {/* Right Panel */}
        <aside className="hidden lg:block w-[350px] pl-6">
          <div className="sticky top-0">
            <RightPanel />
          </div>
        </aside>

      </div>
    </div>
  );
};

export default Layout;