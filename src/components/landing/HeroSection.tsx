import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
  return (
    <motion.section
      className={cn("relative py-20 overflow-hidden bg-[#F8F9FF]", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            className="inline-block rounded-full bg-white px-4 py-2 shadow-sm mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-sm">Transform your Experience</p>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 text-black"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            The Future of
            <br />
            Music Space Booking
          </motion.h1>

          <motion.p
            className="max-w-[600px] text-muted-foreground md:text-lg mb-8 text-[#3a3a3a]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Download Gigsaw to book studios, rent equipment, and connect with
            pros—all in one app. Start now!
          </motion.p>

          <motion.div
            className="flex gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <a href="#" className="inline-block">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-10"
              />
            </a>
            <a href="#" className="inline-block">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on the App Store"
                className="h-10"
              />
            </a>
          </motion.div>
        </div>

        {/* Image Section with Smooth Animation */}
        <div className="flex justify-center items-center mt-[-40px] md:mt-[-60px] relative">
          {/* Soft Glow Effect */}
          <motion.div
            className="absolute w-[500px] md:w-[650px] h-[600px] md:h-[750px] bg-[#aac8ff] opacity-30 blur-3xl rounded-full -z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          ></motion.div>

          {/* App Image with Smooth Entrance */}
          <motion.div
            className="relative flex justify-center w-[500px] md:w-[650px] lg:w-[750px]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <img
              alt="App interface in hand"
              className="w-full h-auto"
              src="src/assets/main_2.png"
              style={{
                objectFit: "contain",
                filter: "drop-shadow(0px 10px 30px rgba(0,0,0,0.2))",
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
