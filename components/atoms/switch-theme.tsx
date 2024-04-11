"use client";
import { useThemeStore } from "@/store/theme-store";
import Image from "next/image";
import { useEffect } from "react";

const SwitchTheme = () => {
  const { toggleDarkMode, darkMode } = useThemeStore();

  useEffect(() => {
    const switchElement = document.getElementById("switch") as HTMLInputElement;
    if (switchElement) {
      switchElement.checked = darkMode;
    }
  }, [darkMode]);

  return (
    <div className="flex items-center gap-x-2 md:pr-6 lg:p-0 xl:gap-x-4">
      <Image
        src={
          darkMode
            ? "/assets/images/icon-sun-light.svg"
            : "/assets/images/icon-sun-dark.svg"
        }
        alt="moon"
        width={20}
        height={20}
        className="xl:size-7"
      />
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          onChange={toggleDarkMode}
          id="switch"
          type="checkbox"
          className="peer sr-only"
        />
        <label htmlFor="switch" className="hidden"></label>
        <div className="peer h-6 w-11 rounded-full border-none bg-silver bg-purple after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full  after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
      </label>
      <Image
        src={
          darkMode
            ? "/assets/images/icon-moon-light.svg"
            : "/assets/images/icon-moon-dark.svg"
        }
        className="xl:size-7"
        alt="moon"
        width={20}
        height={20}
      />
    </div>
  );
};

export default SwitchTheme;
