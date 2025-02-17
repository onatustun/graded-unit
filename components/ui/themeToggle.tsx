"use client"

import { useTheme } from "@/components/context/themeProvider"
import { LuMoonStar, LuSun } from "react-icons/lu"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="hidden lg:flex aspect-square h-7 w-7 p-1 rounded-full dark:hover:backdrop-brightness-200 hover:backdrop-brightness-95"
    >
      {theme === "light" ? <LuMoonStar className="h-full w-full" /> : <LuSun className="h-full w-full" />}
    </button>
  )
}
