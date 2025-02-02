import Link from "next/link"
import { BookBtn } from "../ui/BookBtn"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <header className="fixed w-full flex justify-center items-center backdrop-saturate-[150%] bg-white/60 backdrop-blur-[4px] z-100 border-b-[1px] shadow-sm border-black/30 lg:px-6 lg:py-1">
      <nav className="flex items-center w-full gap-6 relative py-4 px-8 lg:w-fit lg:gap-20">
        <Link href="/" className="text-lg lg:text-xl lg:mr-0 flex gap-2 items-center font-bold text-black">
          <FontAwesomeIcon icon={faAngleDown} style={{fontSize:"36px"}}/>

          <p className="hidden md:block">All Season Sauna</p>
        </Link>

        <ul className="hidden md:flex items-center gap-6 text-base lg:text-lg text-black">
          <li>
            <Link href="#about-us" className="flex items-center gap-2">
              <p>About Us</p>

              <FontAwesomeIcon icon={faAngleDown} style={{fontSize:"16px"}}/>
            </Link>
          </li>

          <li>
            <Link href="#services" className="flex items-center gap-2">
              <p>Services</p>

              <FontAwesomeIcon icon={faAngleDown} style={{fontSize:"16px"}}/>
            </Link>
          </li>

          <li>
            <Link href="#more" className="flex items-center gap-2">
              <p>More</p>

              <FontAwesomeIcon icon={faAngleDown} style={{fontSize:"16px"}}/>
            </Link>
          </li>
        </ul>

        <BookBtn className="hidden md:ml-auto md:flex" />
          
        <button className="relative space-y-2 p-2 md:hidden ml-auto">
          <span className="block h-0.5 w-7 bg-black"></span>
          <span className="block h-0.5 w-7 bg-black"></span>
          <span className="block h-0.5 w-7 bg-black"></span>
        </button>
      </nav>
    </header>
  )
}
