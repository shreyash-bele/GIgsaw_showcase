import { cn } from "@/lib/utils";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface StatsSectionProps {
  className?: string;
}

const stats = [
  { value: 100, label: "Active Musicians" },
  { value: 10, label: "Available Spaces" },
  { value: 250, label: "Booking Made" },
  { value: 4.8, label: "Average Rating", decimals: 1 },
];

export default function StatsSection({ className }: StatsSectionProps) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className={cn("py-16 md:py-24 bg-[#F8F9FF]", className)} ref={ref}>
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
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
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}