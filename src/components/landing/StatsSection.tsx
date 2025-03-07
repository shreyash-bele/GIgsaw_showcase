import { cn } from "@/lib/utils";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface StatsSectionProps {
  className?: string;
}

const stats = [
  { value: 100, label: "Active Musicians" },
  { value: 10, label: "Available Spaces" },
  { value: 250, label: "Bookings Made" },
  { value: 4.8, label: "Average Rating", decimals: 1 },
];

export default function StatsSection({ className }: StatsSectionProps) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className={cn("py-16 md:py-24 bg-[#F8F9FF]", className)} ref={ref}>
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }} // Start from bottom
          whileInView={{ opacity: 1, y: 0 }} // Move up smoothly
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16"
        >
          <div>
            <h2 className="text-3xl font-medium tracking-tight mb-4">
              Numbers That Define
              <br />
              the Future of Music.
            </h2>
            <p className="text-muted-foreground">
              From musicians to venues, our growing numbers are shaping the
              future of music collaboration and performance.
            </p>
          </div>
        </motion.div>

        {/* Stats with Smooth Bottom-to-Top Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }} // Start from bottom
              whileInView={{ opacity: 1, y: 0 }} // Move up smoothly
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15, // Staggered effect
                ease: "easeInOut",
              }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#6C5CE7] mb-2">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    decimals={stat.decimals || 0}
                  />
                ) : (
                  stat.value
                )}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
