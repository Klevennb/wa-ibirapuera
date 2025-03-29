import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const SidebarFooter: React.FC = () => {
    return (
        <div className="fixed bottom-0 w-64 p-4 bg-gray-50 border-t border-r rounded-tr-md rounded-br-md">
            <div className="flex justify-around">
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                    <SettingsIcon />
                </button>
                <button
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-full"
                    aria-label="Logout"
                    role="button"
                >
                    <LogoutIcon />
                </button>
            </div>
        </div>
    );
};

export default SidebarFooter;
