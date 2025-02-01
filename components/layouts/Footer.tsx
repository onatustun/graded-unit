import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  return (
    <footer className="relative w-full h-max flex flex-col gap-24 bg-[#133913] px-4 pt-12 border-black border-t overflow-hidden !pb-0 text-white md:gap-[15%] lg:p-24">
      <div className="flex w-full flex-col items-center justify-between lg:flex-row">
        <div>
          <p className="text-white text-5xl mb-2">All Season Sauna</p>

          <p className="px-4 lg:w-2/5 lg:px-0">Beautifully designed, privacy-focused, and packed with features. We care about your experience, not your data.</p>
        </div>
      </div>

      <div className="flex w-full flex-col justify-between gap-6 lg:my-12 lg:flex-row lg:pr-52">
        <Link href="/" className="lg:text-base text-sm bg-white px-6 border-2 py-2 flex items-center justify-between h-fit w-fit gap-2 text-black rounded-full">
          <p>Book Now</p>

          <FontAwesomeIcon icon={faArrowRight} style={{fontSize:"16px"}} />
        </Link>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Follow Us</p>

            <div className="flex items-center gap-4 opacity-80">
              <Link href="/">
                <FontAwesomeIcon icon={faFacebook} style={{fontSize:"16px"}} />
              </Link>

              <Link href="/">
                <FontAwesomeIcon icon={faInstagram} style={{fontSize:"16px"}} />
              </Link>

              <Link href="/">
                <FontAwesomeIcon icon={faTwitter} style={{fontSize:"16px"}} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-semibold">About Us</p>

            <div className="flex flex-col opacity-80">
              <Link href="/">History</Link>

              <Link href="/">Benefits</Link>

              <Link href="/">Our Team</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold">Services</p>

          <div className="flex flex-col opacity-80">
            <Link href="/">Options</Link>

            <Link href="/">Pricing</Link>

            <Link href="/">Memberships</Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold">More</p>

          <div className="flex flex-col opacity-80">
            <Link href="/">Contact Us</Link>

            <Link href="/">FAQ</Link>

            <Link href="/">Reviews</Link>
          </div>
        </div>
      </div>

      <div className="flex h-32 w-full items-center text-white">
        © 2024 All Season Sauna, Inc. All rights reserved.
      </div>
    </footer>
  )
}
