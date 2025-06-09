import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../../components/ui/navigation-menu";

export const NavbarSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "About Us", hasDropdown: true },
    { label: "Achievement", hasDropdown: false },
    { label: "Shop", hasDropdown: false },
  ];

  return (
    <header className="w-full py-2 px-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="h-20 w-32">
          <img
            className="h-full w-full object-cover"
            alt="Logo"
            src="/image-removebg-preview--23--1.png"
          />
        </div>

        {/* Navigation */}
        <NavigationMenu className="mr-4">
          <NavigationMenuList className="flex gap-8">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                {item.hasDropdown ? (
                  <>
                    <NavigationMenuTrigger className="font-['Manrope',Helvetica] text-lg text-white bg-transparent hover:bg-transparent hover:text-white focus:bg-transparent">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-3 p-4">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="#"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium text-white">
                                About Us Submenu
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    className="font-['Manrope',Helvetica] text-lg text-white hover:text-white"
                    href="#"
                  >
                    {item.label}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
