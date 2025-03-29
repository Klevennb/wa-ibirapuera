import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const link = [
  { href: "/dashboard", text: "Home" },
  { href: "/editor", text: "Write" },
  { href: "/profile", text: "Profile" },
];

const SidebarLinks: React.FC = () => {
  const pathname = usePathname();
  const visibleLinks = link.filter((item) => !pathname.includes(item.href));

  return (
    <nav>
      <ul>
        {visibleLinks.map((item, index) => {
          return (
            <li key={index} className="w-full">
              <Link
                href={item.href}
                className="w-full p-2 font-bold text-gray-600 text-2xl flex justify-between items-center hover:bg-gray-100 rounded-sm"
              >
                <span>{item.text}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SidebarLinks;
