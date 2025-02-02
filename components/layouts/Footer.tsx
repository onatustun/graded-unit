import Link from "next/link"
import { BookBtn } from "../ui/BookBtn"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  return (
    <footer className="relative w-full flex flex-col gap-24 bg-black px-6 pt-12 overflow-hidden !pb-0 text-white md:p-16 lg:gap-[15%] lg:p-24">
      <p className="text-white text-5xl">All Season Sauna</p>

      <div className="flex w-full flex-col justify-between gap-6 lg:my-12 md:flex-row md:pr-44 lg:pr-52">

        <BookBtn variant="light" />

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

        <div className="flex gap-6 flex-col lg:flex-row w-2/5 justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Services</p>

            <div className="flex flex-col opacity-80">
              <Link href="/">Options</Link>

              <Link href="/">Pricing</Link>

              <Link href="/">Memberships</Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-semibold">Support</p>

            <div className="flex flex-col opacity-80">
              <Link href="/">Contact Us</Link>

              <Link href="/">FAQ</Link>

              <Link href="/">Reviews</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-32 w-full items-center text-white">
        © 2024 All Season Sauna, Inc. All rights reserved.
      </div>
    </footer>
  )
}
