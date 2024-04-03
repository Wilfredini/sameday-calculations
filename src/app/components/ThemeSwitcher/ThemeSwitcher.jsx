"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { VscColorMode } from "react-icons/vsc";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex w-full h-full justify-center items-center"
    >
      <VscColorMode className="text-xl text-black dark:text-white" />
    </div>
  );
}
