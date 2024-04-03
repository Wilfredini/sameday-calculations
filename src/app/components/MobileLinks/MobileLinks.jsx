"use client";

import { NavbarMenuItem, Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    title: "Nacenění",
    slug: "/calculations",
  },
  {
    title: "Dashboard",
    slug: "/dashboard",
  },
  {
    title: "Nastavení",
    slug: "/settings",
  },
  {
    title: "Přihlásit",
    slug: "/login",
  },
];

const MobileLinks = () => {
  const pathName = usePathname();

  return (
    <>
      {menuItems.map((item) => {
        const isActive = item.slug === pathName;
        return (
          <NavbarMenuItem key={item.id}>
            <Link
              href={item.slug}
              className={`${
                isActive
                  ? "dark:text-cyan-300 font-bold text-3xl text-gray-800"
                  : "text-gray-400 text-3xl dark:text-gray-400"
              }`}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        );
      })}
    </>
  );
};

export default MobileLinks;
