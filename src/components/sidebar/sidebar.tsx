import React from "react";
import SidebarLinks from "./sidebar-links";
import SidebarFooter from "./siderbar-footer";
import { User } from "@/zustand/user";

interface SidebarProps {
  user?: User;
  logout: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ user, logout }) => {
  const nameOrEmail = user?.name || user?.email || "Guest";

  return (
    <div className="h-full w-64 flex flex-col">
      <div className="bg-gray-800 text-white rounded-sm">
        <div className="text-8xl italic">WA</div>

        <div className="mt-4 flex flex-col items-center">
          {nameOrEmail}
          <div className="w-16 h-16 rounded-full bg-gray-500 flex items-center justify-center text-xl">
            {nameOrEmail[0].toUpperCase()}
          </div>
          <div className="mt-4 flex h-32">
            <span className="italic break-words hyphens-auto">
              {/* {user.tagline} */}
              Tagline
              {/* TODO: Make icon */}
              <button className="ml-2 text-sm text-blue-400 hover:underline">
                Edit
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <SidebarLinks />
      </div>
      <SidebarFooter logout={logout} />
    </div>
  );
};

export default Sidebar;
