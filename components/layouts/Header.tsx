import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <header className="fixed w-full flex justify-center items-center backdrop-saturate-[150%] bg-[#dfecdf]/40 backdrop-blur-[4px] border-b-2 shadow-sm border-[#bfd9bf] lg:px-6 lg:py-1">
      <nav className="flex items-center w-full mx-auto gap-2 relative py-4 px-8 lg:w-fit lg:gap-20">
        <Link href="/" className="text-lg lg:text-xl mr-4 lg:mr-0 flex gap-2 items-center text-[#133913] font-bold text-primary">
          <FontAwesomeIcon icon={faAngleDown} style={{fontSize:"36px"}}/>

          <p className="hidden md:block">All Season Sauna</p>
        </Link>

        <ul className="hidden md:flex items-center gap-6 text-base lg:text-lg text-[#2e6b2e]">
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

        <Link href="/" className="lg:text-base hidden ml-auto text-sm bg-[#206020] px-6 border-2 py-2 md:flex items-center justify-between h-fit w-fit gap-2 text-white rounded-full">
          <p>Book Now</p>

          <FontAwesomeIcon icon={faArrowRight} style={{fontSize:"16px"}} />
        </Link>
      </nav>
    </header>
  )
}
