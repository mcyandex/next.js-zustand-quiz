"use client";

import { cn } from "@/lib/utils";
import { useQuestionStore } from "@/store/quiz-store";
import { useThemeStore } from "@/store/theme-store";
import React, { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { darkMode } = useThemeStore();
  return (
    <div className={cn(
      darkMode && "dark",
      "h-full w-full overflow-hidden transition-all",
    )}>
      {children}
    </div>
  );
};

export default ThemeProvider;