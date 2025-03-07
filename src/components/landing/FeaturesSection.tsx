import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Headphones, Music, Package, Users } from "lucide-react";

interface FeaturesSectionProps {
  className?: string;
}

const features = [
  {
    icon: Music,
    title: "Jam Room Booking",
    description: "Find and book rehearsal space instantly.",
    image: "src/assets/Jam_room.jpg",
  },
  {
    icon: Headphones,
    title: "Studio Rentals",
    description: "Professional recording studios on demand.",
    image: "src/assets/studio_rental.jpg",
  },
  {
    icon: Package,
    title: "Equipment Marketplace",
    description: "Rent or buy quality music gear.",
    image: "src/assets/equipment_marketplace.jpg",
  },
  {
    icon: Users,
    title: "Pro Services",
    description: "Connect with industry professionals.",
    image: "src/assets/pro_service.jpg",
  },
];

export default function FeaturesSection({ className }: FeaturesSectionProps) {
  return (
    <motion.section
      className={cn("py-16 md:py-24 bg-white", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6C5CE7] text-white font-bold mb-4">
              <img src="src/assets/arrow_2.svg" alt="Arrow" className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-medium tracking-tight mb-4">
              Everything You Need, <br /> In One App
            </h2>
            <p className="text-muted-foreground">
              Book jam rooms, rent gear, and connect with musicians—all in one place.
            </p>
          </div>
        </motion.div>

        {/* Cards with Smooth Bottom-to-Top Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl overflow-hidden group shadow-lg"
              initial={{ opacity: 0, y: 100 }} // Starts from bottom
              whileInView={{ opacity: 1, y: 0 }} // Moves up smoothly
              exit={{ opacity: 0, y: 100 }} // Moves down when scrolling up
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <img src={feature.image} alt={feature.title} className="w-full h-80 object-cover" />
              <div className="absolute top-4 right-4 z-20 bg-black/30 rounded-full p-2">
                <feature.icon className="h-5 w-5 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
                <h3 className="text-xl font-medium mb-1">{feature.title}</h3>
                <p className="text-sm text-white/80">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
