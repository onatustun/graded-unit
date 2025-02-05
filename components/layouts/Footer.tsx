import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export function Footer() {
  return (
    <footer className="relative w-full flex flex-col gap-24 z-10 bg-black px-6 pt-12 text-white md:p-16 lg:gap-[15%] lg:p-24">
      <div className="text-white text-5xl">All Season Sauna</div>

      <div className="flex w-full flex-col justify-between gap-6 lg:my-12 md:flex-row">
        <Link href="/" className={cn(buttonVariants({ variant: "light" }), "rounded-full")}>
          Book Now
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>

        <div className="md:w-2/3 lg:w-3/4 flex flex-col md:flex-row">
        <div className="flex flex-col gap-10 md:w-full lg:w-1/2">
          <div className="flex flex-col gap-2">
            <div className="font-semibold">Follow Us</div>

            <div className="flex items-center gap-4 opacity-80">
              <Link href="/">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>

              <Link href="/">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>

              <Link href="/">
                <FontAwesomeIcon icon={faTwitter} />
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

        <div className="flex flex-col lg:flex-row w-full justify-between gap-6 mt-6 md:mt-0 lg:gap-0">
          <div className="flex flex-col gap-2 w-full lg:w-1/2">
            <p className="font-semibold">Services</p>

            <div className="flex flex-col opacity-80">
              <Link href="/">Options</Link>

              <Link href="/">Pricing</Link>

              <Link href="/">Memberships</Link>
            </div>
          </div>

          <div className="flex flex-col gap-2 lg:w-1/2">
            <p className="font-semibold">Support</p>

            <div className="flex flex-col opacity-80">
              <Link href="/">Contact Us</Link>

              <Link href="/">FAQ</Link>

              <Link href="/">Reviews</Link>
            </div>
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
