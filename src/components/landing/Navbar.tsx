import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  className?: string;
}

const navItems = ["Home", "About", "Services", "Contact"];

export default function Navbar({ className }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={cn("sticky top-0 z-50 w-full bg-[#F8F9FF] py-4", className)}
    >
      <div className="container flex items-center justify-between px-4 md:px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-2">
  <a className="flex items-center gap-2" href="#">
    <img src="src/assets/Gigsaw_Color.svg" alt="Gigsaw Logo" className="h-14" />
  </a>
</div>
        <nav className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              className="text-sm font-medium transition-colors hover:text-[#6C5CE7]"
              href="#"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button
            className="hidden md:flex bg-[#6C5CE7] hover:bg-[#5A4AD1] text-white rounded-full"
            size="sm"
          >
            Download Now
          </Button>
          <Button
            className="md:hidden"
            size="icon"
            variant="ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container flex flex-col space-y-3 py-4 px-4 md:px-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                className="text-sm font-medium transition-colors hover:text-[#6C5CE7]"
                href="#"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button
              className="w-full bg-[#6C5CE7] hover:bg-[#5A4AD1] text-white mt-2 rounded-full"
              size="sm"
            >
              Download Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
