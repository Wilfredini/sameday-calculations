"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";

import NavbarLinks from "../Links/NavbarLinks";
import MobileLinks from "../MobileLinks/MobileLinks";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import Image from "next/image";
import ButtonSession from "../buttonSession/ButtonSession";
import AvatarMenu from "../avatarMenu/AvatarMenu";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      position="static"
      className="dark:bg-black bg-gray-50 h-24 shadow-xl md:px-0"
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden pr-3"
      />
      <NavbarBrand
        as={Link}
        href="/"
        className="text-gray-600 font-bold text-xl dark:text-white"
      >
        <Image
          src="/brand-dark.png"
          alt="logo"
          width={200}
          height={100}
          className="dark:hidden"
        />
        <Image
          src="/brand-light.png"
          alt="logo"
          width={200}
          height={100}
          className="hidden dark:block"
        />
      </NavbarBrand>
      <NavbarContent
        className="text-blue-900 hidden sm:flex gap-4"
        justify="center"
      >
        <NavbarLinks />
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          <ButtonSession />
        </NavbarItem>
        <AvatarMenu />

        <NavbarItem className=" h-10 w-10 rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 flex justify-center items-center">
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="flex justify-center items-center gap-6">
        <MobileLinks />
      </NavbarMenu>
    </Navbar>
  );
}
