import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./components/ui/mode-toggle";

function NavBar() {
  return (
    <div className="bg-custom-blue dark:bg-black">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-slate-600 dark:bg-black">
              <NavigationMenuLink
                className="text-white dark:text-gray-300"
                href="/"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-slate-600 dark:bg-black">
              <NavigationMenuLink
                className="text-white dark:text-gray-300"
                href="/about"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-slate-600 dark:bg-black">
              <NavigationMenuLink
                className="text-white dark:text-gray-300"
                href="/contact"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-slate-600 dark:bg-black">
              <NavigationMenuLink
                className="text-white dark:text-gray-300"
                href="/resume"
              >
                Resume
              </NavigationMenuLink>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-slate-600 dark:bg-black">
              <NavigationMenuLink
                className="text-white dark:text-gray-300"
                href="/blog"
              >
                Blog
              </NavigationMenuLink>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default NavBar;
