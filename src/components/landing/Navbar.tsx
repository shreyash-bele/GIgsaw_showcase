import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  className?: string;
}

const navItems = ["Home", "About", "Services", "Contact"];

export default function Navbar({ className }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("sticky top-0 z-50 w-full bg-[#F8F9FF] py-4", className)}
    >
      <div className="container flex items-center justify-between px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <a className="flex items-center gap-2" href="#">
            <img
              src="public/assets/Gigsaw_Color.svg"
              alt="Gigsaw Logo"
              className="h-14"
            />
          </a>
        </div>
        <nav className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              className="text-sm font-medium transition-colors hover:text-[#6C5CE7]"
              href="#"
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.a>
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t"
          >
            <div className="container flex flex-col space-y-3 py-4 px-4 md:px-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  className="text-sm font-medium transition-colors hover:text-[#6C5CE7]"
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              ))}
              <Button
                className="w-full bg-[#6C5CE7] hover:bg-[#5A4AD1] text-white mt-2 rounded-full"
                size="sm"
              >
                Download Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
