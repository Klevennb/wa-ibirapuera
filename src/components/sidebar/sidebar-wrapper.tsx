"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./sidebar";

export default function SidebarWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Define where the sidebar should be visible
  const showSidebar = ["/dashboard", "/editor", "/profile"].includes(pathname);

  return (
    <div className="flex min-h-screen">
      {showSidebar && <Sidebar />}
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
