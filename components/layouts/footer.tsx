import { BookNowButton } from "@/components/ui/bookNowButton";
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export function Footer() {
  return (
    <footer className="relative w-full flex flex-col gap-16 z-10 bg-black px-6 py-12 text-white md:p-16 lg:gap-[15%] lg:p-24">
      <div className="text-white text-3xl">All Season Sauna</div>

      <div className="flex w-full flex-col justify-between gap-6 md:flex-row">
        <BookNowButton variant="light" />

        <div className="md:w-2/3 lg:w-3/4 flex flex-col md:flex-row">
        <div className="flex flex-col gap-6 md:w-full lg:w-1/2">
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

              <Link href="/">
                <FontAwesomeIcon icon={faEnvelope} />
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
    </footer>
  )
}
