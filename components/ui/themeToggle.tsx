"use client"

import { useTheme } from "@/components/context/themeProvider"
import { LuMoonStar, LuSun } from "react-icons/lu"
import clsx from "clsx"

interface ThemeToggleProps {
  className?: string
  variant?: "dark" | "light"
}

export function ThemeToggle({ className, variant = "light" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={clsx(
        "aspect-square h-7 w-7 p-1 rounded-full",
        variant === "dark" ? "bg-foreground text-background hover:brightness-200 dark:hover:brightness-95" : "bg-background text-foreground hover:brightness-95 dark:hover:brightness-200",
        className
      )}
    >
      {theme === "light" ? <LuMoonStar className="h-full w-full" /> : <LuSun className="h-full w-full" />}
    </button>
  )
}
