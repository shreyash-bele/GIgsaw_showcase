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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            The Future of
            <br />
            Music Space Booking
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-lg mb-8">
            Download Digijam to book studios, rent equipment, and connect with
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
        <div className="flex justify-center">
          <div className="relative w-[280px] md:w-[320px]">
            <img
              alt="App interface in hand"
              className="w-full"
              src="https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&q=80&auto=format&fit=crop&ixlib=rb-4.0.3"
              style={{
                objectFit: "contain",
                filter: "drop-shadow(0px 8px 24px rgba(0,0,0,0.1))",
              }}
            />
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[200px] rounded-3xl overflow-hidden shadow-lg">
              <img
                alt="App interface"
                className="w-full"
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&q=80"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
