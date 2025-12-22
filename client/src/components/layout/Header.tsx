import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

interface HeaderProps {
  className?: string;
  logoClassName?: string;
}

export const Header = ({ className = "", logoClassName = "" }: HeaderProps): JSX.Element => {
  const [location] = useLocation();

  return (
    <header className={`w-full bg-icons px-4 md:px-8 lg:px-[110px] py-4 md:py-5 ${className}`}>
      <div className="max-w-[1700px] mx-auto flex items-center justify-between">
        <Link href="/">
          <img
            className={`w-[150px] md:w-[200px] lg:w-[265px] h-auto object-cover cursor-pointer ${logoClassName}`}
            alt="Logo"
            src="/figmaAssets/image-2-1.png"
            data-testid="logo-home-link"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-[45px]">
          {navigationItems.map((item, index) => {
            const isActive = location === item.href;
            return (
              <div key={index} className="relative">
                <Link
                  href={item.href}
                  className="[font-family:'Roboto',Helvetica] font-semibold text-for-bg-dark text-sm lg:text-base tracking-[0] leading-[26.6px] whitespace-nowrap hover:opacity-80 transition-opacity"
                  data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </Link>
                {isActive && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-for-bg-dark" />
                )}
              </div>
            );
          })}
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-for-bg-dark">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[260px] bg-white">
            <nav className="flex flex-col gap-2 mt-8">
              {navigationItems.map((item, index) => {
                const isActive = location === item.href;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={`[font-family:'Roboto',Helvetica] font-semibold text-[#181a20] text-base tracking-[0] leading-[26.6px] py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors ${
                      isActive ? "bg-gray-100" : ""
                    }`}
                    data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

