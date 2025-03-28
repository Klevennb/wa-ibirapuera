import React from "react";
import { MockUser, mockUser } from "../../../mocks/mock";
import SidebarLinks from "./sidebar-links";

interface SidebarProps {
  user?: MockUser;
}

const Sidebar: React.FC<SidebarProps> = ({ user = mockUser }) => {
  return (
    <div className="h-full w-64 flex flex-col">
      <div className="bg-gray-800 text-white rounded-sm">
        <div className="text-8xl italic">WA</div>

        <div className="mt-4 flex flex-col items-center">
          {user.username}
          <div className="w-16 h-16 rounded-full bg-gray-500 flex items-center justify-center text-xl">
            {user.username[0].toUpperCase()}
          </div>
          <div className="mt-4 flex h-32">
            <span className="italic break-words hyphens-auto">
              {user.tagline}
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
      {/* TODO: Add settings bar */}
    </div>
  );
};

export default Sidebar;
