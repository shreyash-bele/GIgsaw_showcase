import { cn } from "@/lib/utils";
import { Headphones, Music, Package, Users } from "lucide-react";

interface FeaturesSectionProps {
  className?: string;
}

const features = [
  {
    icon: Music,
    title: "Jam Room Booking",
    description:
      "Book rehearsal spaces by the hour with all the equipment you need.",
    image:
      "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=600&q=80",
  },
  {
    icon: Headphones,
    title: "Studio Rentals",
    description:
      "Professional recording studios with engineers available on demand.",
    image:
      "https://images.unsplash.com/photo-1598520106830-8c45c2035460?w=600&q=80",
  },
  {
    icon: Package,
    title: "Equipment Marketplace",
    description:
      "Rent or buy instruments, amps, and recording gear from local musicians.",
    image:
      "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=600&q=80",
  },
  {
    icon: Users,
    title: "Pro Services",
    description:
      "Connect with session musicians, producers, and audio engineers.",
    image:
      "https://images.unsplash.com/photo-1619983081563-430f63602796?w=600&q=80",
  },
];

export default function FeaturesSection({ className }: FeaturesSectionProps) {
  return (
    <section className={cn("py-16 md:py-24 bg-white", className)}>
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#6C5CE7] text-white font-bold mb-4">
              3
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Everything You need,
              <br />
              In one app
            </h2>
            <p className="text-muted-foreground">
              Everything you need to book jam rooms, rent gear, and connect with
              musicians
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4 z-20 bg-black/30 rounded-full p-2">
                <feature.icon className="h-5 w-5 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
                <h3 className="text-xl font-bold mb-1">{feature.title}</h3>
                <p className="text-sm text-white/80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
