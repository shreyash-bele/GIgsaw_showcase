import { cn } from "@/lib/utils";

interface ReviewsSectionProps {
  className?: string;
}

const reviews = [
  {
    name: "Om Joshi",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Om",
    rating: 5,
    text: "Booking a studio hasn't been easier before. I can find the perfect space for my band practice in minutes. Highly recommend this app to all musicians out there!",
  },
  {
    name: "Omkar Khanvilkar",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Omkar",
    rating: 5,
    text: "Perfect for singers! I've been using this app for months now and it's changed how I book studio time. The equipment listings are also super helpful.",
  },
];

export default function ReviewsSection({ className }: ReviewsSectionProps) {
  return (
    <section className={cn("py-16 md:py-24 bg-[#F8F9FF]", className)}>
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Customer reviews
              <br />
              and feedback from
              <br />
              real users.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-medium">{review.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
