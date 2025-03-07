import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  className?: string;
}

export default function CTASection({ className }: CTASectionProps) {
  return (
    <section className={cn("py-16 md:py-24 bg-[#F8F9FF]", className)}>
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Ready to Transform your Music Journey?
            </h2>
            <h3 className="text-2xl font-bold mb-6">
              Download
              <br />
              Mobile App
            </h3>
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#6C5CE7] text-white font-bold mb-6">
              2
            </div>
            <div className="flex gap-4 mb-4">
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
            <p className="text-sm text-muted-foreground">
              Download Digijam for easy jam room rentals and hassle-free music
              sessions anywhere, anytime.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              alt="App interface in hand"
              className="w-full max-w-[320px]"
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&q=80"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
