import Link from "next/link"
import clsx from "clsx"
import { LuArrowRight } from "react-icons/lu"

interface BookNowProps {
  className?: string
  variant?: "dark" | "light"
}

export function BookNow({ className, variant = "dark" }: BookNowProps) {
  return (
    <Link 
      href="/" 
      className={clsx(
        "flex items-center justify-center whitespace-nowrap rounded-full gap-2 px-5 py-3 text-sm font-medium lg:text-base h-fit w-fit",
        variant === "dark" ? "bg-foreground text-background hover:brightness-150 dark:hover:brightness-95" : "bg-background text-foreground hover:brightness-95 dark:hover:brightness-150",
        className
      )}
    >
      <div>Book Now</div>
      <LuArrowRight />
    </Link>
  )
}
