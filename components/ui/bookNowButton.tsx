import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"

interface BookNowButtonProps {
  className?: string
  variant?: "dark" | "light"
}

export function BookNowButton({ className, variant = "dark" }: BookNowButtonProps) {
  return (
    <Link 
      href="/" 
      className={clsx(
        "flex items-center justify-center rounded-full gap-2 px-5 py-3 text-sm font-medium lg:text-base h-fit w-fit",
        variant === "dark" ? "bg-foreground text-background" : "bg-background text-foreground",
        className
      )}
    >
      <div>Book Now</div>
      <FontAwesomeIcon icon={faArrowRight} />
    </Link>
  )
}
