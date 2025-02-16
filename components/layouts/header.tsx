import Link from "next/link"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContentCustomList } from "@/components/ui/navigationMenu"
import { BookNowButton } from "@/components/ui/bookNowButton"
import { LuMoonStar } from "react-icons/lu";
import { AboutUsItems, ServicesItems, SupportItems } from "@/lib/navItems"

export function Header() {
  return (
    <header className="w-full flex justify-center items-center bg-background z-50 lg:px-6 lg:py-1">
      <nav className="flex items-center w-full gap-4 md:gap-6 relative max-[550px]:py-3 py-4 px-2 md:px-8 lg:w-fit lg:gap-24">
        <Link href="/" className="lg:mr-0 flex gap-2 items-center">
          <div className="aspect-square bg-primary h-[36px] rounded-full"></div>

          <div className="hidden md:block font-semibold text-lg lg:text-xl">All Season Sauna</div>
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

        <div className="items-center gap-5 hidden ml-auto min-[550px]:flex">
          <button className="hidden lg:flex aspect-square h-6 w-6"><LuMoonStar className="h-full w-full" /></button>
          <BookNowButton />
        </div>
      </nav>
    </header>
  )
}
