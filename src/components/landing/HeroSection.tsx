import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      className={cn("relative py-20 overflow-hidden bg-[#F8F9FF]", className)}
    >
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block rounded-full bg-white px-4 py-2 shadow-sm mb-6">
            <p className="text-sm">Transform your Experience</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 text-black">
            The Future of
            <br />
            Music Space Booking
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-lg mb-8 text-[#3a3a3a]">
            Download Gigsaw to book studios, rent equipment, and connect with
            pros—all in one app. Start now!
          </p>
          <div className="flex gap-4 mb-16">
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
          </div>
        </div>
        <div className="flex justify-center items-center mt-[-40px] md:mt-[-60px] relative">
  {/* Soft Glow */}
  <div className="absolute w-[500px] md:w-[650px] h-[600px] md:h-[750px] bg-[#aac8ff] opacity-30 blur-3xl rounded-full -z-10"></div>

  {/* Centered & Enlarged Hand Image */}
  <div className="relative flex justify-center w-[500px] md:w-[650px] lg:w-[750px]">
    <img
      alt="App interface in hand"
      className="w-full h-auto"
      src="src/assets/main_2.png"
      style={{
        objectFit: "contain",
        filter: "drop-shadow(0px 10px 30px rgba(0,0,0,0.2))",
      }}
    />
  </div>
</div>


      </div>
    </section>
  );
}
