import { cn } from "@/lib/utils";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("py-6", className)}
    >
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-4 md:mb-0">
            © 2025 Gigsaw. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a className="text-muted-foreground hover:text-foreground" href="https://www.linkedin.com/company/gigsawservices/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a className="text-muted-foreground hover:text-foreground" href="https://x.com/rockWithGigsaw" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              className="text-muted-foreground hover:text-foreground"
              href="https://www.instagram.com/gigsaw.vibes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
