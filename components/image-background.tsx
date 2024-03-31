"use client";

import { useThemeStore } from "@/store/theme-store";

const ImageBackground = () => {
  const { darkMode } = useThemeStore();
  if (darkMode) {
    return (
      <div
        className="w-full h-full absolute top-0 left-0 bg-transparent"
        style={{
          backgroundImage:
            "url('/assets/images/pattern-background-desktop-dark.svg')",
        }}
      />
    );
  }
  return (
    <div
      className="w-full h-full absolute top-0 left-0 bg-transparent"
      style={{
        backgroundImage:
          "url('/assets/images/pattern-background-desktop-light.svg')",
      }}
    />
  );
};

export default ImageBackground;
