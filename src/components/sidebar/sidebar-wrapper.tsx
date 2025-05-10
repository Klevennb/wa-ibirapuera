"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./sidebar";
import { logout } from "@/app/actions/auth/logout";
import { useUserStore } from "@/zustand/user";

export default function SidebarWrapper({ children }: { children: React.ReactNode }) {
  const {user, clearUser} = useUserStore();

  const pathname = usePathname();

  // Define where the sidebar should be visible
  const showSidebar = ["/dashboard", "/editor", "/profile"].includes(pathname);

  const handleLogout = async () => {
    await logout();
    clearUser(); // Clear user from Zustand store
  }

  return (
    <div className="flex h-screen">
      {(showSidebar && user) && <Sidebar logout={handleLogout} user={user} />}
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
