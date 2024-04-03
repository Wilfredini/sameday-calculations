"use client";

import { NavbarItem, Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";

const links = [
  {
    id: 1,
    title: "Nacenění",
    slug: "/calculations",
  },
  {
    id: 2,
    title: "Dashboard",
    slug: "/dashboard",
  },
  {
    id: 3,
    title: "Nastavení",
    slug: "/settings",
  },
];

const NavbarLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const isActive = link.slug === pathname;
        return (
          <NavbarItem key={link.id}>
            <Link
              href={link.slug}
              className={`${
                isActive
                  ? "dark:text-cyan-300 font-bold text-gray-800"
                  : "text-gray-400 dark:text-gray-400"
              }`}
            >
              {link.title}
            </Link>
          </NavbarItem>
        );
      })}
    </>
  );
};

export default NavbarLinks;
