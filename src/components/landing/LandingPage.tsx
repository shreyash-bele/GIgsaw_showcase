import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import StatsSection from "./StatsSection";
import ReviewsSection from "./ReviewsSection";
import CTASection from "./CTASection";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FF] font-sans antialiased">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <ReviewsSection />
        <CTASection />
      </main>
      <Footer className="bg-[#F8F9FF]" />
    </div>
  );
}
