
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";

const NavigationBar: React.FC = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <div className="bg-white rounded-xl shadow-lg px-6 py-3 max-w-6xl w-[95%] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold text-xl text-black flex items-center">
          <span className="mr-1">LinkFlow</span>
          <span className="text-purple-500">✦</span>
        </Link>

        {/* Navigation Links */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {["Products", "Templates", "Marketplace", "Learn", "Pricing"].map((item) => (
              <NavigationMenuItem key={item}>
                <Link 
                  to="#" 
                  className={cn(
                    "px-4 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors",
                  )}
                >
                  {item}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            className="hidden sm:flex text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            Log in
          </Button>
          <Button 
            className="bg-gray-900 hover:bg-black text-white rounded-full px-6"
          >
            Sign up free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
