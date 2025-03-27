import React from 'react';
import { MockUser, mockUser } from '../../../mocks/mock';

interface SidebarProps {
    user?: MockUser
}

const Sidebar: React.FC<SidebarProps> = ({user = mockUser}) => {

    return (
        <div className="h-full w-64 bg-gray-800 text-white">
            <div className='text-8xl italic'>WA</div>
            
            <div className='mt-4 flex  flex-col items-center'>
                {user.username}
                <div className="w-16 h-16 rounded-full bg-gray-500 flex items-center justify-center text-xl">
                    {user.username[0].toUpperCase()}
                </div>
                <div className="mt-4 flex items-center">
                    <span className="italic">{user.tagline}</span>
                    <button className="ml-2 text-sm text-blue-400 hover:underline">Edit</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;