import React, { useState } from 'react';

interface EditorSidebarProps {
    children?: React.ReactNode;
}

export const EditorSidebar: React.FC<EditorSidebarProps> = ({ children }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Toggle Button */}
            <button
                style={{
                    position: 'fixed',
                    top: 20,
                    right: open ? 320 : 20,
                    zIndex: 1100,
                    transition: 'right 0.3s',
                }}
                onClick={() => setOpen(!open)}
                aria-label={open ? 'Close sidebar' : 'Open sidebar'}
            >
                {open ? 'Close' : 'Open'}
            </button>

            {/* Sidebar Drawer */}
            <aside
                style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    height: '100vh',
                    width: 300,
                    background: '#fff',
                    boxShadow: '-2px 0 8px rgba(0,0,0,0.1)',
                    transform: open ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.3s',
                    zIndex: 1099,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {children}
            </aside>
        </>
    );
};