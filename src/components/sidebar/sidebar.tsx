import React from 'react';

interface SidebarProps {
    
}

const Sidebar: React.FC<SidebarProps> = () => {
    return (
        <div className="h-full w-64 bg-gray-800 text-white">
            Sidebar
        </div>
    );
};

export default Sidebar;