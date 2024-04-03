"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const NextUiProvider = ({ children }) => {
  return (
    <NextThemesProvider
      defaultTheme="dark"
      attribute="class"
      themes={["dark", "light"]}
    >
      <NextUIProvider>{children}</NextUIProvider>
    </NextThemesProvider>
  );
};

export default NextUiProvider;
