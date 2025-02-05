import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <header className="fixed w-full flex justify-center items-center backdrop-saturate-[150%] bg-white/60 backdrop-blur-[3px] z-50 border-b-[1px] shadow-sm border-black/30 lg:px-6 lg:py-1">
      <nav className="flex items-center w-full gap-4 md:gap-6 relative max-[550px]:py-3 py-4 px-2 md:px-8 lg:w-fit lg:gap-20">
        <Link href="/" className="lg:mr-0 flex gap-2 items-center">
          <div className="aspect-square bg-black h-[36px] rounded-full"></div>

          <div className="hidden md:block font-bold text-black text-lg lg:text-xl">All Season Sauna</div>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col gap-4 p-2 md:w-[400px] lg:w-[500px]">
                  <Link href="/" title="History" className="p-2 hover:bg-white/50 rounded-xl duration-100">
                    <div className="text-base lg:text-lg font-bold">History</div>
                    <div className="text-xs lg:text-sm">Learn about the rich history and origins of saunas through the ages.</div>
                  </Link>
                  <Link href="/" title="Benefits" className="p-2 hover:bg-white/50 rounded-xl duration-100">
                    <div className="text-base lg:text-lg font-bold">Benefits</div>
                    <div className="text-xs lg:text-sm">Learn about the health benefits that saunas provide for body and mind.</div>
                  </Link>
                  <Link href="/" title="Our Team" className="p-2 hover:bg-white/50 rounded-xl duration-100">
                    <div className="text-base lg:text-lg font-bold">Our Team</div>
                    <div className="text-xs lg:text-sm">Meet the passionate team behind our sauna services and expertise.</div>
                  </Link>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col gap-4 p-2 md:w-[400px] lg:w-[500px]">
                  <Link href="/" title="Options" className="p-2 hover:bg-white/50 rounded-xl duration-100">
                    <div className="text-base lg:text-lg font-bold">Options</div>
                    <div className="text-xs lg:text-sm">Explore the different sauna options we offer to suit your needs.</div>
                  </Link>
                  <Link href="/" title="Pricing" className="p-2 hover:bg-white/50 rounded-xl duration-100">
                    <div className="text-base lg:text-lg font-bold">Pricing</div>
                    <div className="text-xs lg:text-sm">View our competitive pricing and find the perfect sauna experience for you.</div>
                  </Link>
                  <Link href="/" title="Memberships" className="p-2 hover:bg-white/50 rounded-xl duration-100">
                    <div className="text-base lg:text-lg font-bold">Memberships</div>
                    <div className="text-xs lg:text-sm">Discover membership packages for exclusive perks and benefits.</div>
                  </Link>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="hidden min-[320px]:flex">
              <NavigationMenuTrigger>Support</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col gap-4 p-2 md:w-[400px] lg:w-[500px]">
                  <Link href="/" title="Contact Us" className="p-2 hover:bg-white/50 rounded-xl duration-100">
                    <div className="text-base lg:text-lg font-bold">Contact Us</div>
                    <div className="text-xs lg:text-sm">Get in touch with us for inquiries, support, or booking information.</div>
                  </Link>
                  <Link href="/" title="FAQ" className="p-2 hover:bg-white/50 rounded-xl duration-100">
                    <div className="text-base lg:text-lg font-bold">FAQ</div>
                    <div className="text-xs lg:text-sm">Learn about the health benefits that saunas provide for body and mind.</div>
                  </Link>
                  <Link href="/" title="Reviews" className="p-2 hover:bg-white/50 rounded-xl duration-100">
                    <div className="text-base lg:text-lg font-bold">Reviews</div>
                    <div className="text-xs lg:text-sm">Read testimonials from our happy customers and their sauna experiences.</div>
                  </Link>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Link href="/" className={cn(buttonVariants({ variant: "default" }), "lg:text-base rounded-full hidden ml-auto min-[550px]:flex")}>
          Book Now
          <FontAwesomeIcon icon={faArrowRight} style={{fontSize: "16px"}} />
        </Link>
      </nav>
    </header>
  )
}
