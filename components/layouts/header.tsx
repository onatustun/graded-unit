import Link from "next/link"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContentCustomList } from "@/components/ui/navigationMenu"
import { BookNowButton } from "@/components/ui/bookNowButton"
import { AboutUsItems, ServicesItems, SupportItems } from "@/lib/navItems"

export function Header() {
  return (
    <header className="w-full flex justify-center items-center bg-white z-50 shadow-md lg:px-6 lg:py-1">
      <nav className="flex items-center w-full gap-4 md:gap-6 relative max-[550px]:py-3 py-4 px-2 md:px-8 lg:w-fit lg:gap-20">
        <Link href="/" className="lg:mr-0 flex gap-2 items-center">
          <div className="aspect-square bg-black h-[36px] rounded-full"></div>

          <div className="hidden md:block font-semibold text-black text-lg lg:text-xl">All Season Sauna</div>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>

              <NavigationMenuContent>
                <NavigationMenuContentCustomList items={AboutUsItems} />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>

              <NavigationMenuContent>
                <NavigationMenuContentCustomList items={ServicesItems} />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="hidden min-[320px]:flex">
              <NavigationMenuTrigger>Support</NavigationMenuTrigger>

              <NavigationMenuContent>
                <NavigationMenuContentCustomList items={SupportItems} />
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <BookNowButton className="hidden ml-auto min-[550px]:flex" />
      </nav>
    </header>
  )
}
