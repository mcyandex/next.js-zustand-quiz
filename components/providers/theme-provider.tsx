"use client";

import { useThemeStore } from "@/store/theme-store";
import React, { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { darkMode } = useThemeStore();
  return (
    <div className={`${darkMode ? "dark" : ""} w-full xs:min-h-screen lg:h-full`}>
      {children}
    </div>
  );
};

export default ThemeProvider;