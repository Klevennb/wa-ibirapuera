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
                className="w-full block p-2 font-bold text-gray-600 text-2xl whitespace-pre"
              >
                {`${item.text}                   >`}
                {/* TODO: Add Chevron */}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SidebarLinks;
