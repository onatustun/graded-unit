import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx"; 

type BookBtnProps = {
  variant?: "dark" | "light"; 
  className?: string;
};

export function BookBtn({ variant = "dark", className }: BookBtnProps) {
  return (
    <Link
      href="/"
      className={clsx(
        "lg:text-base text-sm px-5 py-2 flex items-center justify-between h-fit w-fit gap-2 rounded-full",
        variant === "light"
          ? "bg-white text-black"
          : "bg-black text-white",
        className
      )}
    >
      <p>Book Now</p>
      <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "16px" }} />
    </Link>
  );
}
